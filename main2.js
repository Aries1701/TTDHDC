const repairShops = [
    { id: 1, name: "Thái Honda motor 3", type: "xe máy", district: "Bắc Từ Liêm", ward: "Cổ Nhuế", street: "Viên", info: "https://lh5.googleusercontent.com/p/AF1QipOtAk762T8QU0pfJY6G-E6j6GL-rkZJp7cgqkXq=w195-h143-p-k-no", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14892.14739168745!2d105.76122343540197!3d21.071190461392327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134551e6d3ebc31%3A0xde0f4c49f360e94d!2zVGnhu4dtIHPhu61hIHhlIFRow6FpIEhvbmRhIG1vdG9yIDM!5e0!3m2!1svi!2s!4v1732171889374!5m2!1svi!2s" },
    { id: 2, name: "Nam Việt Motor", type: "xe máy", district: "Bắc Từ Liêm", ward: "Cổ Nhuế", street: "Viên", info: "https://lh5.googleusercontent.com/p/AF1QipPTzSauZcjTIA50ORmw8MNo8_gsc8uFi_U7N3Ou=w397-h298-k-no", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14892.133196117047!2d105.75341284017608!3d21.071350644606373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455d5dbe97f69%3A0x526310e4ce0e4974!2sNam%20Vi%E1%BB%87t%20Motor!5e0!3m2!1svi!2s!4v1732172431339!5m2!1svi!2s" },
    { id: 3, name: "Gara Bình An", type: "ô tô", district: "Bắc Từ Liêm", ward: "Xuân Đỉnh", street: "Phạm Văn Đồng", info: "https://lh5.googleusercontent.com/p/AF1QipNvcgb55LE7z_NJW0sh3r2cey--l3Lhczkvg9HV=w408-h306-k-no", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7445.854550672153!2d105.77577844262123!3d21.075566650472744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4b5415d4f1%3A0x6c9c694e4c0a60a2!2sGara%20B%C3%ACnh%20An!5e0!3m2!1svi!2s!4v1731052224855!5m2!1svi!2s" },
    { id: 4, name: "Gara Tâm Bình", type: "ô tô", district: "Bắc Từ Liêm", ward: "Cổ Nhuế", street: "Phạm Văn Đồng", info: "https://lh5.googleusercontent.com/p/AF1QipNdatLGQhA7FfCDwADdePfjc53NnhfTHaH2YMOU=w426-h240-k-no", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29787.26469473457!2d105.78215510000001!3d21.0563572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5d332aa6a3%3A0x25ee93571fdc2ee!2zR2FyYSDDlCB0w7QgVMOibSBCw6xuaA!5e0!3m2!1svi!2s!4v1732272564797!5m2!1svi!2s" },
    { id: 5, name: "Gara Trường Phát", type: "ô tô", district: "Bắc Từ Liêm", ward: "Đông Ngạc", street: "Tân Xuân", info: "https://lh5.googleusercontent.com/p/AF1QipOSR1Z8Y9uoQ3SxYDd3oBGn0bh79-70_JRxwD9-=w408-h306-k-no", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29782.443688467527!2d105.75309063610291!3d21.080430739222365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aab444d3e9e7%3A0xbc0b94caff1461ea!2zR2FyYWdlIFRyxrDhu51uZyBQaMOhdA!5e0!3m2!1svi!2s!4v1731060790966!5m2!1svi!2s" },
    { id: 6, name: "Gara An Lộc", type: "ô tô", district: "Bắc Từ Liêm", ward: "Xuân Đỉnh", street: "Lộc", info: "https://lh5.googleusercontent.com/p/AF1QipNPniF2LSLLUmTQa9R-2F90iG9KWl9FCjhUpeUp=w408-h305-k-no", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29784.923476763488!2d105.76404482473153!3d21.0680512757592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab51b34cfa43%3A0xee428b191cd6836a!2zR2FyYWdlIMO0dMO0IEFuIEzhu5lj!5e0!3m2!1svi!2s!4v1732272663983!5m2!1svi!2s" },
    { id: 7, name: "Vinh Motor", type: "xe máy", district: "Bắc Từ Liêm", ward: "Cổ Nhuế", street: "Đường Cổ Nhuế", info: "https://lh5.googleusercontent.com/p/AF1QipN38DBSRTCv0cXhvinqit0HhoxWLC06LsGHmZpm=w224-h398-k-no", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14892.358740595262!2d105.7783255!3d21.0690799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134552c4d9eb82d%3A0x440521b3f38fbbcb!2zVGnhu4dtIFPhu61hIFhlIFZpbmggTW90b3I!5e0!3m2!1svi!2s!4v1732271257498!5m2!1svi!2s" },
    { id: 8, name: "Phương Motor", type: "xe máy", district: "Bắc Từ Liêm", ward: "Xuân Đỉnh", street: "Xuân Đỉnh", info: "https://lh5.googleusercontent.com/p/AF1QipObZ1EzorUummM427hEsD2_EK1L9Cmru_SrXDAr=w397-h298-k-no", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29781.774086480524!2d105.75200368927922!3d21.083772299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7a89d73a9d%3A0x5d666ea6e39112e0!2zUGjGsMahbmcgTW90b3IgLSBT4butYSBjaOG7r2EsIELhuqNvIGTGsOG7oW5nLCBD4bupdSBo4buZIFhlIE3DoXkgLSAzNjkgWHXDom4gxJDhu4luaA!5e0!3m2!1svi!2s!4v1732272117097!5m2!1svi!2s" },
    { id: 9, name: "ANH TRỌNG", type: "xe máy", district: "Bắc Từ Liêm", ward: "Thụy Phương", street: "Tân Nhuệ", info: "https://lh5.googleusercontent.com/p/AF1QipPNBakzkngR_62Wm9fuah9LAT5NNRS5rnooVXzU=w397-h298-k-no", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29781.774086480524!2d105.75200368927922!3d21.083772299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345583a396828b%3A0x8874aef09d1dbfd7!2zQU5IIFRS4buMTkcgLSBT4busQSBDSOG7rkEgWEUgTcOBWQ!5e0!3m2!1svi!2s!4v1732271899842!5m2!1svi!2s" },
    { id: 10, name: "Gara Quang Tiến", type: "ô tô", district: "Bắc Từ Liêm", ward: "Xuân Đỉnh", street: "Xuân Đỉnh", info: "https://lh5.googleusercontent.com/p/AF1QipO7kgT1NxD7nn_5HSMp68MkKOY-49c4lgfzaf-K=w408-h306-k-no", location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29784.859318933493!2d105.76009661306162!3d21.06837164845941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab72088f5559%3A0x7044ae006659f5ff!2zZ2FyYSDDtCB0w7QgUXVhbmcgVGnhur9u!5e0!3m2!1svi!2s!4v1732272899948!5m2!1svi!2s" },
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
            resultItem.innerHTML = `<strong>${shop.name}</strong><br>${shop.type}</strong><br>${shop.street}`;
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