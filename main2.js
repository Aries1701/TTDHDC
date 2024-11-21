const repairShops = [
    { id: 1, name: "Thái Honda motor 3",type:"xe máy", district: "Bắc Từ Liêm", ward: "Cổ Nhuế", street: "Phố Viên", info: "Thông tin về sửa xe ABC", location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14892.14739168745!2d105.76122343540197!3d21.071190461392327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134551e6d3ebc31%3A0xde0f4c49f360e94d!2zVGnhu4dtIHPhu61hIHhlIFRow6FpIEhvbmRhIG1vdG9yIDM!5e0!3m2!1svi!2s!4v1732171889374!5m2!1svi!2s" },
        { id: 2, name: "Nam Việt Motor",type:"xe máy", district: "Bắc Từ Liêm", ward: "Cổ Nhuế", street: "Phố Viên", info: "Thông tin về sửa xe XYZ", location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14892.133196117047!2d105.75341284017608!3d21.071350644606373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455d5dbe97f69%3A0x526310e4ce0e4974!2sNam%20Vi%E1%BB%87t%20Motor!5e0!3m2!1svi!2s!4v1732172431339!5m2!1svi!2s"},
        { id: 3, name: "Gara Bình An",type:"ô tô", district: "Bắc Từ Liêm", ward: "Xuân Đỉnh", street: "Phạm Văn Đồng", info: "Thông tin về sửa xe XYZ", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7445.854550672153!2d105.77577844262123!3d21.075566650472744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4b5415d4f1%3A0x6c9c694e4c0a60a2!2sGara%20B%C3%ACnh%20An!5e0!3m2!1svi!2s!4v1731052224855!5m2!1svi!2s" },
        { id: 4, name: "Gara Tuấn Hoàng",type:"ô tô", district: "Bắc Từ Liêm", ward: "Đông Ngạc", street: "Thụy Phương", info: "Thông tin về sửa xe XYZ", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29781.3844773958!2d105.75429226574161!3d21.085716360367257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455e8d7ec6667%3A0x567611f4df0321e2!2zR0FSQSBUdeG6pW4gSG_DoG5n!5e0!3m2!1svi!2s!4v1731058720079!5m2!1svi!2s" },
        { id: 5, name: "Gara Trường Phát",type:"ô tô", district: "Bắc Từ Liêm", ward: "Đông Ngạc", street: "Tân Xuân", info: "Thông tin về sửa xe XYZ", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29782.443688467527!2d105.75309063610291!3d21.080430739222365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aab444d3e9e7%3A0xbc0b94caff1461ea!2zR2FyYWdlIFRyxrDhu51uZyBQaMOhdA!5e0!3m2!1svi!2s!4v1731060790966!5m2!1svi!2s" },
        { id: 6, name: "Gara Thanh Y",type:"ô tô", district: "Bắc Từ Liêm", ward: "Đông Ngạc", street: "Cầu Thăng Long", info: "Thông tin về sửa xe XYZ", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29782.443688467527!2d105.75309063610291!3d21.080430739222365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf51e7c4e1d%3A0x5dc5f94dd4251697!2zR2FyYWdlIMOUIFTDtCBUaGFuaCBZ!5e0!3m2!1svi!2s!4v1731061030976!5m2!1svi!2s" },
        // Chỗ sửa xe
    ];

    document.getElementById('search-bar').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = '';

        if (query === '') {
            return; // Không hiển thị j nếu không có chữ trong search bar
        }

        const filteredShops = repairShops.filter(shop => 
            shop.district.toLowerCase().includes(query) || 
            shop.ward.toLowerCase().includes(query)||
            shop.street.toLowerCase().includes(query)||
            shop.type.toLowerCase().includes(query)
        );

        filteredShops.forEach(shop => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `<strong>${shop.name}</strong><br>${shop.info}</strong><br>${shop.type}</strong><br>${shop.street}`;
            resultItem.onclick = function() {
                window.location.href = `detail.html?id=${shop.id}`; // Chuyển đến trang chi tiết
            };
            resultsContainer.appendChild(resultItem);
        });
    });

    function displayRepairShops(shops ) {
        const shopList = document.getElementById('shopList');
        shops.forEach(shop => {
            const shopDiv = document.createElement('div');
            shopDiv.className = 'shop';
            shopDiv.innerHTML = `
                <h2>${shop.name}</h2>
                <p>Quận: ${shop.district}</p>
                <p>Phường: ${shop.ward}</p>
                <p>Thông tin: ${shop.info}</p>
                ${shop.location ? `<p>Vị trí: <iframe src="${shop.location}" width="300" height="200"></iframe></p>` : ''}
            `;
            shopDiv.onclick = function() {
                window.location.href = `detail.html?id=${shop.id}`; // Chuyển đến trang chi tiết
            };
            shopList.appendChild(shopDiv);
        });
    }

    // Gọi hàm để hiển thị
    displayRepairShops(repairShops);