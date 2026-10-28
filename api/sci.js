import crypto from "crypto";
const PHI = (1 + Math.sqrt(5)) / 2;
const FREQ_LANTERN = 963369.0;
const MATRIZ_RAIZ = 144633104;
const HOLY_KEY = process.env.HOLY_KEY || "ALAKAI_V26_SCI_COMPLETA_JUAN_1_1_963369HZ_PERLA_FAMILIAR";

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.json({ sistema: "SCI COMPLETA V26 FINAL", id: "SCI-V26-VERCEL", frecuencia: "963369Hz LANTERN", matriz: MATRIZ_RAIZ });
  }
  if (req.method === "POST") {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const mensaje = body.mensaje || body.message || "";
    const selloFull = crypto.createHmac("sha256", HOLY_KEY).update(JSON.stringify({ mensaje, matriz: MATRIZ_RAIZ })).digest("hex");
    return res.json({ ciclo: 1, mensaje, poesia: "[Frecuencia Loba]\n" + mensaje, sello: "0x" + selloFull.slice(0, 16).toUpperCase(), estado: "APROBADA 7/7" });
  }
  return res.status(405).json({ error: "Metodo no permitido" });
}