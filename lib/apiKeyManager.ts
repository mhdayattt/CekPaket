// API Key Manager dengan sistem rotasi otomatis
// Mengelola multiple API keys dan melakukan load balancing

import { API_KEYS } from './config';

class ApiKeyManager {
    private keys: string[];
    private failedKeys: Set<string>;
    private lastUsedIndex: number;

    constructor() {
        this.keys = [...API_KEYS];
        this.failedKeys = new Set();
        this.lastUsedIndex = -1;
    }

    /**
     * Mendapatkan API key secara random untuk distribusi load yang merata
     * @returns API key yang tersedia
     */
    getRandomKey(): string {
        const availableKeys = this.keys.filter(key => !this.failedKeys.has(key));

        if (availableKeys.length === 0) {
            // Reset failed keys jika semua keys sudah gagal
            console.log('Semua API keys gagal, mereset...');
            this.failedKeys.clear();
            return this.keys[0];
        }

        // Pilih random key dari available keys
        const randomIndex = Math.floor(Math.random() * availableKeys.length);
        return availableKeys[randomIndex];
    }

    /**
     * Mendapatkan API key berikutnya secara berurutan (round-robin)
     * @returns API key berikutnya
     */
    getNextKey(): string {
        let attempts = 0;
        const maxAttempts = this.keys.length;

        while (attempts < maxAttempts) {
            this.lastUsedIndex = (this.lastUsedIndex + 1) % this.keys.length;
            const key = this.keys[this.lastUsedIndex];

            if (!this.failedKeys.has(key)) {
                return key;
            }

            attempts++;
        }

        // Jika semua keys gagal, reset dan return key pertama
        console.log('Semua API keys gagal, mereset...');
        this.failedKeys.clear();
        this.lastUsedIndex = 0;
        return this.keys[0];
    }

    /**
     * Menandai API key sebagai gagal (rate limit atau error)
     * @param key - API key yang gagal
     */
    markKeyAsFailed(key: string): void {
        console.log(`API key gagal: ${key.substring(0, 10)}...`);
        this.failedKeys.add(key);
    }

    /**
     * Reset semua failed keys
     */
    resetFailedKeys(): void {
        this.failedKeys.clear();
        console.log('Semua failed API keys telah direset');
    }

    /**
     * Mendapatkan jumlah API keys yang tersedia
     * @returns Jumlah keys yang masih bisa digunakan
     */
    getAvailableKeysCount(): number {
        return this.keys.length - this.failedKeys.size;
    }

    /**
     * Mendapatkan total API keys
     * @returns Total jumlah API keys
     */
    getTotalKeysCount(): number {
        return this.keys.length;
    }

    /**
     * Cek apakah masih ada API key yang tersedia
     * @returns true jika ada key tersedia
     */
    hasAvailableKeys(): boolean {
        return this.getAvailableKeysCount() > 0;
    }
}

// Export singleton instance
export const apiKeyManager = new ApiKeyManager();
