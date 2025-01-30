const loginPage = document.getElementById('loginPage');
const mainApp = document.getElementById('mainApp');
const addProductSection = document.getElementById('addProductSection');
const addItemForm = document.getElementById('addItemForm');
const stockCards = document.getElementById('stockCards');

function loginAs(role) {
    if (role === 'employee') {
        alert('Login successful!');
        loginPage.classList.add('hidden');
        mainApp.classList.remove('hidden');
        addProductSection.style.display = 'block';
    } else if (role === 'customer') {
        alert('Welcome, Customer!');
        loginPage.classList.add('hidden');
        mainApp.classList.remove('hidden');
        addProductSection.style.display = 'none';
    }
}

function goBackToLogin() {
    mainApp.classList.add('hidden');
    loginPage.classList.remove('hidden');
}

addItemForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value.trim();
    const itemQuantity = document.getElementById('itemQuantity').value.trim();
    const itemPrice = document.getElementById('itemPrice').value.trim();
    const itemImage = document.getElementById('itemImage').files[0];

    if (itemName && itemQuantity && itemPrice && itemImage) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const card = document.createElement('div');
            card.className = "bg-purple-100 text-gray-800 p-4 rounded-lg shadow-md";
            card.innerHTML = `<img src="${event.target.result}" alt="${itemName}" class="w-full h-40 object-cover rounded mb-4">
                <h3 class="text-lg font-bold mb-2">${itemName}</h3>
                <p class="mb-2">จำนวน: <span class="font-semibold">${itemQuantity}</span></p>
                <p class="mb-2">ราคา: <span class="font-semibold">฿${itemPrice}</span></p>`;
            stockCards.appendChild(card);
        };
        reader.readAsDataURL(itemImage);
        addItemForm.reset();
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วนและแนบรูปภาพ.');
    }
});
