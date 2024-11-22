// Khởi tạo bản đồ với vị trí mặc định (Hà Nội)
const map = L.map('map').setView([21.0285, 105.8542], 13);

// Sử dụng lớp bản đồ từ OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Mảng chứa các điểm sửa xe, bao gồm tên và tọa độ
const repairPoints = [
    { lat: 21.07557985160602, lng: 105.7990637448593, name: "Gara Quang Tiến" },
    { lat: 21.07638074149691, lng: 105.78515917360109, name: "Gara Bình An" },
    { lat: 21.08983504646173, lng: 105.7855024963482, name: "Gara Trường Phát" },
    { lat: 21.058039281279854, lng: 105.78181177680995, name: "Gara Tâm Bình" },
    { lat: 21.070053593668707, lng: 105.78842073969193, name: "Gara An Lộc" },
    { lat: 21.071751101322032, lng: 105.7724682122385, name: "Thái Honda Motor" },
    { lat: 21.066464983745284, lng: 105.77287590800069, name: "Nam Việt Motor" },
    { lat: 21.069428436436542, lng: 105.77826178359608, name: "Vinh Motor" },
    { lat: 21.08088445860299, lng: 105.78481809623858, name: "Phương Motor" },
    { lat: 21.084237946949344, lng: 105.77169057722894, name: "Anh Trọng Motor" }
];

// Hàm tính khoảng cách giữa hai điểm
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371e3; // bán kính trái đất tính bằng mét
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lng2 - lng1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // khoảng cách
}

// Hàm tìm các điểm sửa xe trong bán kính 2km
function findRepairPointsWithinRadius(userLat, userLng, radius = 2000) {
    return repairPoints.filter(point => {
        const distance = calculateDistance(userLat, userLng, point.lat, point.lng);
        return distance <= radius;
    });
}

// Hàm lấy địa chỉ từ OpenStreetMap (Nominatim) bằng tọa độ
async function getAddressFromCoordinates(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.address ? data.display_name : "Không tìm thấy địa chỉ";
}

// Hàm để định vị và tìm các điểm sửa xe gần nhất trong bán kính 2km
async function locateUser() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Đánh dấu vị trí người dùng
            const userMarker = L.marker([userLat, userLng]).addTo(map)
                .bindPopup("Vị trí của bạn")
                .openPopup();

            // Tìm các điểm sửa xe trong bán kính 2km
            const nearbyRepairPoints = findRepairPointsWithinRadius(userLat, userLng, 10000);

            // Kiểm tra và hiển thị các điểm sửa xe gần nhất
            if (nearbyRepairPoints.length > 0) {
                nearbyRepairPoints.forEach(async point => {
                    // Lấy địa chỉ từ Nominatim
                    const address = await getAddressFromCoordinates(point.lat, point.lng);

                    // Đánh dấu từng điểm sửa xe với địa chỉ từ OpenStreetMap
                    L.marker([point.lat, point.lng]).addTo(map)
                        .bindPopup(`<b>${point.name}</b><br>Địa chỉ: ${address}`);
                });

                // Phóng to để hiển thị cả vị trí người dùng và các điểm sửa xe gần nhất
                map.setView([userLat, userLng], 14);
            } else {
                alert("Không tìm thấy điểm sửa xe nào trong bán kính 2km.");
            }
        });
    } else {
        alert("Trình duyệt của bạn không hỗ trợ định vị.");
    }
}
