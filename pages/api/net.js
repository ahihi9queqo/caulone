let latestData = { temp: 0, time: new Date().toISOString() };

export default function handler(req, res) {
  if (req.method === "POST") {
    const { temp } = req.body;
    latestData = {
      temp,
      time: new Date().toISOString()
    };
    console.log("ESP32 gửi nhiệt độ:", latestData);

    return res.status(200).json({ message: "Đã nhận", data: latestData });
  }

  if (req.method === "GET") {
    return res.status(200).json(latestData);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
