// Konfigurasi API Keys untuk Binderbyte
// Sistem akan secara otomatis rotate antara API keys ini

export const API_KEYS = [
    'bf5a0e7d63bcfb325cf602dc2c5e9114407a04801565d1a2c2285cdaf22762bf',
    'dec8436cf842e957614104a09f8268084bf13d15d29030c0fedd68359e2f64a3',
    '57fa35d0e6d8be7872cd185850f24fa21d262ff869e353ca6510b7e6c72d60c6',
];

// Base URL untuk API Binderbyte
export const BINDERBYTE_BASE_URL = 'https://api.binderbyte.com';

// Endpoint paths
export const ENDPOINTS = {
    TRACK: '/v1/track',
    LIST_COURIER: '/v1/list_courier',
    PROVINSI: '/wilayah/provinsi',
    KABUPATEN: '/wilayah/kabupaten',
    KECAMATAN: '/wilayah/kecamatan',
    KELURAHAN: '/wilayah/kelurahan',
};

// Timeout untuk API calls (ms)
export const API_TIMEOUT = 10000;

// Maksimal retry attempts
export const MAX_RETRY_ATTEMPTS = 3;
