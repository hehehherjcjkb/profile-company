"use server";

import { db } from "@/lib/db";
import { RowDataPacket } from "mysql2";
import { revalidatePath } from "next/cache";

export type SiteContent = {
    id?: number;
    section: string;
    content_key: string;
    content_value: string;
    updated_at?: string;
};

async function ensureTableExists() {
    let connection;
    try {
        connection = await db();
        await connection.query(`
      CREATE TABLE IF NOT EXISTS site_contents (
        id INT AUTO_INCREMENT PRIMARY KEY,
        section VARCHAR(50),
        content_key VARCHAR(50),
        content_value TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
    } catch (error) {
        console.error("Error creating table or connecting to DB:", error);
    } finally {
        if (connection) connection.release();
    }
}

export async function getSiteContent() {
    await ensureTableExists();
    let connection;
    try {
        connection = await db();
        const [rows] = await connection.query<RowDataPacket[]>(
            "SELECT * FROM site_contents"
        );
        return rows as SiteContent[];
    } catch (error) {
        console.error("Error fetching content:", error);
        return [];
    } finally {
        if (connection) connection.release();
    }
}

export async function updateSiteContent(section: string, key: string, value: string) {
    await ensureTableExists();
    let connection;
    try {
        connection = await db();
        // Check if exists
        const [existing] = await connection.query<RowDataPacket[]>(
            "SELECT id FROM site_contents WHERE section = ? AND content_key = ?",
            [section, key]
        );

        if (existing.length > 0) {
            await connection.query(
                "UPDATE site_contents SET content_value = ? WHERE section = ? AND content_key = ?",
                [value, section, key]
            );
        } else {
            await connection.query(
                "INSERT INTO site_contents (section, content_key, content_value) VALUES (?, ?, ?)",
                [section, key, value]
            );
        }
        revalidatePath("/");
        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.error("Error updating content:", error);
        return { error: "Failed to update content" };
    } finally {
        if (connection) connection.release();
    }
}

export async function deleteSiteContent(id: number) {
    let connection;
    try {
        connection = await db();
        await connection.query("DELETE FROM site_contents WHERE id = ?", [id]);
        revalidatePath("/");
        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.error("Error deleting content:", error);
        return { error: "Failed to delete content" };
    } finally {
        if (connection) connection.release();
    }
}

export async function initializeSiteContent() {
    const initialData = [
        { section: "hero", content_key: "badge", content_value: "Solusi Pendidikan Sekolah, Satu Ekosistem" },
        { section: "hero", content_key: "title", content_value: "Solusi Pendidikan Terintegrasi untuk Sekolah di Indonesia" },
        { section: "hero", content_key: "description", content_value: "Kami membantu sekolah memenuhi kebutuhan pembelajaran, literasi, asesmen pendidikan, pengembangan kapasitas, sarana penunjang, sistem operasional, dan publikasi digital—selaras dengan Dana BOSP Reguler maupun sumber dana pendidikan sah lainnya." },
        { section: "hero", content_key: "cta_primary", content_value: "Konsultasi Kebutuhan Sekolah" },
        { section: "hero", content_key: "cta_secondary", content_value: "Minta Katalog & Proposal" },
        { section: "stats", content_key: "count", content_value: "500+" },
        { section: "stats", content_key: "label", content_value: "Sekolah Terlayani" },
    ];

    let connection; // Declare connection here
    try {
        connection = await db(); // Assign connection inside try block
        for (const item of initialData) {
            const [existing] = await connection.query<RowDataPacket[]>(
                "SELECT id FROM site_contents WHERE section = ? AND content_key = ?",
                [item.section, item.content_key]
            );
            if (existing.length === 0) {
                await connection.query(
                    "INSERT INTO site_contents (section, content_key, content_value) VALUES (?, ?, ?)",
                    [item.section, item.content_key, item.content_value]
                );
            }
        }
        return { success: true };
    } catch (error) {
        console.error("Error initializing content:", error);
        return { error: "Failed to initialize content" };
    } finally {
        if (connection) connection.release();
    }
}
