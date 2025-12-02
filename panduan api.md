# api indonesia by binderbyte

api key binderbyte 1 = bf5a0e7d63bcfb325cf602dc2c5e9114407a04801565d1a2c2285cdaf22762bf
api key binderbyte 2 = dec8436cf842e957614104a09f8268084bf13d15d29030c0fedd68359e2f64a3
api key binderbyte 3 = 57fa35d0e6d8be7872cd185850f24fa21d262ff869e353ca6510b7e6c72d60c6

## api wilayah indonesia

- Get Provinsi = https://api.binderbyte.com/wilayah/provinsi?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d

- Get Kabupaten / Kota = https://api.binderbyte.com/wilayah/kabupaten?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&id_provinsi=36

- Get Kecamatan = https://api.binderbyte.com/wilayah/kecamatan?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&id_kabupaten=3672

- Get Kelurahan / Desa = https://api.binderbyte.com/wilayah/kelurahan?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&id_kecamatan=367201

# List Jasa Kurir

- Get List JAsa Kurir = https://api.binderbyte.com/v1/list_courier?api_key=cb978c0a4a9574dafcxxxxxxxxxxxxxxxxxxxx

JSON = [
{
"code": "jne",
"description": "JNE Express"
},
{
"code": "pos",
"description": "POS Indonesia"
},
{
"code": "jnt",
"description": "J&T Express"
},
{
"code": "jnt_cargo",
"description": "J&T Cargo"
},
{
"code": "sicepat",
"description": "SiCepat"
},
{
"code": "tiki",
"description": "TIKI"
},
{
"code": "anteraja",
"description": "AnterAja"
},
{
"code": "wahana",
"description": "Wahana"
},
{
"code": "ninja",
"description": "Ninja Express"
},
{
"code": "lion",
"description": "Lion Parcel"
},
{
"code": "pcp",
"description": "PCP Express"
},
{
"code": "jet",
"description": "JET Express"
},
{
"code": "rex",
"description": "REX Express"
},
{
"code": "first",
"description": "First Logistics"
},
{
"code": "ide",
"description": "ID Express"
},
{
"code": "spx",
"description": "Shopee Express"
},
{
"code": "kgx",
"description": "KGXpress"
},
{
"code": "sap",
"description": "SAP Express"
},
{
"code": "rpx",
"description": "RPX"
},
{
"code": "lex",
"description": "Lazada Express"
},
{
"code": "indah_cargo",
"description": "Indah Cargo"
},
{
"code": "dakota",
"description": "Dakota Cargo"
},
{
"code": "kurir_tokopedia",
"description": "Kurir Rekomendasi"
}
]

# api cek resi

- Get JNE = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=jne&awb=582230008329223

JSON = {
"status": 200,
"message": "Successfully tracked package",
"data": {
"summary": {
"awb": "8825112045716759",
"courier": "JNE Express",
"service": "REG\*",
"status": "DELIVERED",
"date": "2020-09-29 01:50:00",
"desc": "",
"amount": "37.000",
"weight": "0.4Kg"
},
"detail": {
"origin": "DEPOK",
"destination": "PRINGSEWU, PRINGSEWU",
"shipper": "TASIMPORTBATAMMURAH",
"receiver": "RESALINA OKTARIA"
},
"history": [
{
"date": "2020-10-02 13:33:00",
"desc": "DELIVERED TO [RESALINA | 02-10-2020 13:33 | PRINGSEWU, PRINGSEWU ]",
"location": ""
},
{
"date": "2020-10-02 09:09:00",
"desc": "WITH DELIVERY COURIER []",
"location": ""
},
{
"date": "2020-10-02 08:15:00",
"desc": "RECEIVED AT WAREHOUSE [PRINGSEWU, PRINGSEWU]",
"location": ""
},
{
"date": "2020-10-01 10:57:00",
"desc": "SHIPMENT FORWARDED TO DESTINATION [PRINGSEWU, PRINGSEWU]",
"location": ""
},
{
"date": "2020-09-30 12:43:00",
"desc": "RECEIVED AT WAREHOUSE [BANDARLAMPUNG]",
"location": ""
},
{
"date": "2020-09-29 22:27:00",
"desc": "PROCESSED AT SORTING CENTER [DEPOK]",
"location": ""
},
{
"date": "2020-09-29 10:12:00",
"desc": "RECEIVED AT SORTING CENTER [DEPOK]",
"location": ""
},
{
"date": "2020-09-29 01:50:00",
"desc": "SHIPMENT RECEIVED BY JNE COUNTER OFFICER AT [DEPOK]",
"location": ""
}
]
}
}

- Get Pos Indonesia = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=pos&awb=18022470553

JSON = {
"status": 200,
"message": "Successfully tracked package",
"data": {
"summary": {
"awb": "18022470553",
"courier": "Pos Indonesia",
"service": "POS KILAT KHUSUS",
"status": "DELIVERED",
"date": "2020-10-02 14:54:42",
"desc": "",
"amount": "",
"weight": ""
},
"detail": {
"origin": "MALANG",
"destination": "DSN NGRAWAN 1 . 2 DS REJOSARI KEC W KAB. BLITAR",
"shipper": "KEANO KIDS",
"receiver": "QORIAH"
},
"history": [
{
"date": "2020-10-02 14:54:42",
"desc": "SELESAI ANTAR DI WONODADI\r\nDITERIMA OLEH QORIAH",
"location": ""
},
{
"date": "2020-10-02 13:54:05",
"desc": "PROSES ANTAR DI WONODADI",
"location": ""
},
{
"date": "2020-10-02 09:04:40",
"desc": "DITERUSKAN KE HUB WONODADI",
"location": ""
},
{
"date": "2020-10-02 08:37:22",
"desc": "TIBA DI KANTOR ANTARAN BLITAR",
"location": ""
},
{
"date": "2020-10-01 19:35:35",
"desc": "DITERUSKAN KE KANTOR ANTARAN BLITAR",
"location": ""
},
{
"date": "2020-10-01 18:38:43",
"desc": "TIBA DI KANTOR ANTARAN MALANG",
"location": ""
},
{
"date": "2020-10-01 13:51:46",
"desc": "DITERUSKAN KE KANTOR ANTARAN MALANG",
"location": ""
},
{
"date": "2020-10-01 12:51:49",
"desc": "- BARCODE : 18022470553\r\n- PENERIMAAN DI LOKET : LE TUREN  KANTOR POS LE TUREN 65175D1\r\n- PENGIRIM : KEANO KIDS\r\n   MALANG\r\n- PENERIMA : QORIAH\r\n   KAB. BLITAR\r\n- PRODUK : PAKET KILAT KHUSUS",
"location": ""
}
]
}
}

- GET JNT = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=jnt&awb=JP2255749628

JSON = {
"status": 200,
"message": "Successfully tracked package",
"data": {
"summary": {
"awb": "JP6961181926",
"courier": "J&T Express",
"service": "",
"status": "DELIVERED",
"date": "2020-10-01 12:30:28",
"desc": "",
"amount": "",
"weight": ""
},
"detail": {
"origin": "",
"destination": "",
"shipper": "",
"receiver": ""
},
"history": [
{
"date": "2020-10-01 12:30:28",
"desc": "TERKIRIM: DROP POINT [SUNGAI PENUH] (DITERIMA OLEH: MUHAMMAD LUTHFI ALHA)",
"location": "SUNGAI PENUH"
},
{
"date": "2020-10-01 09:04:16",
"desc": "SEDANG DIANTAR: DROP POINT [SUNGAI PENUH] (CONTACT: ROMI EKA PUTRA +6282281231686)",
"location": "SUNGAI PENUH"
},
{
"date": "2020-10-01 07:06:25",
"desc": "TELAH TIBA: DROP POINT [SUNGAI PENUH] DARI [DJB_GATEWAY]",
"location": "SUNGAI PENUH"
},
{
"date": "2020-10-01 01:35:27",
"desc": "TELAH TIBA: TRANSIT CENTER [JAMBI] DARI [JKT_GATEWAY]",
"location": "JAMBI"
},
{
"date": "2020-09-30 17:22:48",
"desc": "TELAH BERANGKAT: PUSAT TRANSIT [JAMBI] MENUJU [SUNGAI PENUH]",
"location": "JAMBI"
},
{
"date": "2020-09-29 09:54:45",
"desc": "TELAH BERANGKAT: PUSAT TRANSIT [JAKARTA] MENUJU [JAMBI]",
"location": "JAKARTA"
},
{
"date": "2020-09-29 05:57:01",
"desc": "TELAH TIBA: TRANSIT CENTER [JAKARTA] DARI [ANCOL]",
"location": "JAKARTA"
},
{
"date": "2020-09-29 01:22:34",
"desc": "TELAH BERANGKAT: PUSAT TRANSIT [JAKARTA] MENUJU [JAKARTA]",
"location": "JAKARTA"
},
{
"date": "2020-09-28 22:06:44",
"desc": "TELAH DIAMBIL: DROP POINT [JAKARTA] (DIPROSES OLEH: SANTOSO1)",
"location": "JAKARTA"
}
]
}
}

- JNT CARGO = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=jnt_cargo&awb=200159673253

- SiCepat = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=sicepat&awb=005244878857

- TIKI = https://api.binderbyte.com/v1/track?api_key=f8000a7fa7be89bb3796d9a753d248c2d1c0ac04ac994b7cb860b31240a730d1&courier=tiki&awb=030205696069

- AnterAja = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=anteraja&awb=11000098821211

- Wahana = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=wahana&awb=AGN42256

- Ninja = https://api.binderbyte.com/v1/track?api_key=f8000a7fa7be89bb3796d9a753d248c2d1c0ac04ac994b7cb860b31240a730d1&courier=ninja&awb=NVIDRATHT000000317

- Lion = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=lion&awb=11LP1715594502994

- PCP Express = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=pcp&awb=000131129V

- Jet Express = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=jet&awb=824675567369

- REX Express = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=rex&awb=22201104904042

- First Logistics = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=first&awb=86559384

- ID Express = https://api.binderbyte.com/v1/track?api_key=8e49f28e0f2f2cf56393c352613eec358e85fb7077ce6f7f453ebb826a7b1f6d&courier=ide&awb=IDS002972779819

- Shopee Express = https://api.binderbyte.com/v1/track?api_key=cb978c0a4a9574dafc1e630885296ea231bb7964cea07ebf34e638672f66a347&courier=spx&awb=SPXID048949914625

- KGXpress = https://api.binderbyte.com/v1/track?api_key=cb978c0a4a9574dafcxxxxxxxxxxxxxxxxxxxx&courier=kgx&awb=KGX14900512911

- SAP Express = https://api.binderbyte.com/v1/track?api_key=cb978c0a4a9574dafcxxxxxxxxxxxxxxxxxxxx&courier=sap&awb=MIS2306220000048967

- JX Express = https://api.binderbyte.com/v1/track?api_key=cb978c0a4a9574dafcxxxxxxxxxxxxxxxxxxxx&courier=jxe&awb=1018904915

- RPX = https://api.binderbyte.com/v1/track?api_key=cb978c0a4a9574dafcxxxxxxxxxxxxxxxxxxxx&courier=rpx&awb=799955509662

- Lazada Express = https://api.binderbyte.com/v1/track?api_key=cb978c0a4a9574dafcxxxxxxxxxxxxxxxxxxxx&courier=lex&awb=LXAD-3194878510

- Indah Cargo = https://api.binderbyte.com/v1/track?api_key=cb978c0a4a9574dafcxxxxxxxxxxxxxxxxxxxx&courier=indah_cargo&awb=PNG1CS18759907

- Dakota Cargo = https://api.binderbyte.com/v1/track?api_key=cb978c0a4a9574dafcxxxxxxxxxxxxxxxxxxxx&courier=dakota&awb=797112023A00060234

- Kurir Rekomendasi = https://api.binderbyte.com/v1/track?api_key=cb978c0a4a9574dafcxxxxxxxxxxxxxxxxxxxx&courier=kurir_tokopedia&awb=TKP01-C0KQJMC
