// Type definitions untuk API Binderbyte dan aplikasi tracking paket

// Interface untuk data kurir
export interface Courier {
  code: string;
  description: string;
}

// Interface untuk summary tracking
export interface TrackingSummary {
  awb: string;
  courier: string;
  service: string;
  status: string;
  date: string;
  desc: string;
  amount: string;
  weight: string;
}

// Interface untuk detail pengiriman
export interface TrackingDetail {
  origin: string;
  destination: string;
  shipper: string;
  receiver: string;
}

// Interface untuk history/riwayat tracking
export interface TrackingHistory {
  date: string;
  desc: string;
  location: string;
}

// Interface untuk data tracking lengkap
export interface TrackingData {
  summary: TrackingSummary;
  detail: TrackingDetail;
  history: TrackingHistory[];
}

// Interface untuk response API tracking
export interface TrackingResponse {
  status: number;
  message: string;
  data?: TrackingData;
  error?: string;
}

// Interface untuk request tracking
export interface TrackingRequest {
  courier: string;
  awb: string;
}

// Interface untuk response list kurir
export interface CourierListResponse {
  status: number;
  data?: Courier[];
  error?: string;
}

// Status pengiriman yang mungkin
export type DeliveryStatus = 
  | 'DELIVERED' 
  | 'ON_DELIVERY' 
  | 'IN_TRANSIT' 
  | 'PENDING' 
  | 'RETURNED' 
  | 'CANCELLED'
  | 'UNKNOWN';

// Interface untuk API Key Manager
export interface ApiKeyConfig {
  keys: string[];
  currentIndex: number;
  failedKeys: Set<string>;
}
