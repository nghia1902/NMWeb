// Dữ liệu mẫu cho thú cưng - trong thực tế có thể lấy từ backend
const petData = {
    1: {
        id: 1,
        name: "Golden Retriever",
        type: "dog",
        age: "2 tháng",
        gender: "Đực",
        price: 6500000,
        formattedPrice: "6.500.000₫",
        rating: 4.5,
        availability: "Có sẵn",
        description: "Chó Golden Retriever 2 tháng tuổi, đã tiêm phòng đầy đủ, rất thân thiện và năng động.",
        longDescription: "Golden Retriever là một trong những giống chó được yêu thích nhất thế giới với tính cách thân thiện, trung thành và rất thông minh. Những chú chó này rất thích hợp cho gia đình có trẻ em, thích chơi đùa và dễ dàng huấn luyện. Chúng tôi cung cấp những chú Golden thuần chủng, đã được tiêm phòng đầy đủ và được bác sĩ thú y kiểm tra sức khỏe trước khi đến tay khách hàng.",
        features: [
            "Đã tiêm phòng đầy đủ các loại vaccine",
            "Được bác sĩ thú y kiểm tra sức khỏe",
            "Có sổ theo dõi sức khỏe",
            "Bảo hành sức khỏe 15 ngày",
            "Tặng kèm thức ăn cho 7 ngày đầu"
        ],
        images: [
            "img/Golden Retriever4.png",
            "img/Golden Retriever1",
            "img/Golden Retriever2.jpg",
            "img/Golden Retriever3.jpg"
        ],
        reviews: [
            {
                name: "Nguyễn Văn A",
                rating: 5,
                date: "15/03/2024",
                comment: "Chú Golden của tôi rất khỏe mạnh và ngoan ngoãn. Cảm ơn PetHaven!"
            },
            {
                name: "Trần Thị B",
                rating: 4,
                date: "28/02/2024",
                comment: "Dịch vụ giao hàng nhanh, chú chó rất dễ thương nhưng hơi hiếu động."
            }
        ],
        relatedPets: [4, 2, 5]
    },
    2: {
        id: 2,
        name: "Mèo Anh lông ngắn",
        type: "cat",
        age: "3 tháng",
        gender: "Cái",
        price: 5000000,
        formattedPrice: "5.000.000₫",
        rating: 4,
        availability: "Có sẵn",
        description: "Mèo Anh lông ngắn 3 tháng tuổi, màu xám xanh, rất ngoan và dễ thương.",
        longDescription: "Mèo Anh lông ngắn (British Shorthair) là giống mèo có nguồn gốc từ Anh quốc với đặc điểm nhận dạng là bộ lông ngắn dày, khuôn mặt tròn và thân hình mập mạp. Giống mèo này có tính cách điềm tĩnh, thông minh và rất thân thiện với con người. Mèo Anh lông ngắn của chúng tôi được nuôi trong môi trường sạch sẽ, được tiêm phòng đầy đủ và có giấy chứng nhận sức khỏe.",
        features: [
            "Đã tiêm phòng đầy đủ",
            "Đã tẩy giun sán",
            "Sức khỏe tốt",
            "Bảo hành sức khỏe 15 ngày",
            "Tặng kèm đồ dùng cơ bản cho mèo"
        ],
        images: [
            "img/Mèo Anh lông ngắn3.jpg",
            "img/Mèo Anh lông ngắn1",
            "img/Mèo Anh lông ngắn2.jpg"
        ],
        reviews: [
            {
                name: "Lê Thị C",
                rating: 5,
                date: "10/03/2024",
                comment: "Mèo rất khỏe mạnh và ngoan ngoãn. Giao hàng nhanh chóng."
            }
        ],
        relatedPets: [5, 1, 6]
    },
    // Các dữ liệu mẫu khác tương tự...
    3: {
        id: 3,
        name: "Thỏ mini Hà Lan",
        type: "rabbit",
        age: "2 tháng",
        gender: "Đực/Cái",
        price: 900000,
        formattedPrice: "900.000₫",
        rating: 5,
        availability: "Còn 2 con",
        description: "Thỏ mini Hà Lan đa màu, kích thước nhỏ, rất dễ nuôi và ngoan ngoãn.",
        longDescription: "Thỏ mini Hà Lan là một trong những giống thỏ cảnh được yêu thích nhất với kích thước nhỏ, bộ lông mềm mại đa màu sắc và đôi tai dựng đứng đáng yêu. Loài thỏ này có tính cách hiền lành, dễ gần và thích hợp làm thú cưng trong nhà. Thỏ của chúng tôi được chăm sóc kỹ lưỡng và kiểm tra sức khỏe trước khi bán.",
        features: [
            "Kích thước nhỏ, dễ nuôi",
            "Nhiều màu sắc đa dạng",
            "Tính cách hiền lành",
            "Đã được kiểm tra sức khỏe",
            "Hướng dẫn chăm sóc chi tiết"
        ],
        images: [
            "img/Thỏ mini Hà Lan.jpg",
            "img/Thỏ mini Hà Lan2.jpg"
        ],
        reviews: [
            {
                name: "Phạm Văn D",
                rating: 5,
                date: "05/03/2024",
                comment: "Thỏ rất dễ thương và dễ chăm sóc, con tôi rất thích."
            }
        ],
        relatedPets: [6, 2, 4]
    },
    4: {
        id: 4,
        name: "Poodle Tiny",
        type: "dog",
        age: "3 tháng",
        gender: "Đực",
        price: 7200000,
        formattedPrice: "7.200.000₫",
        rating: 5,
        availability: "Có sẵn",
        description: "Chó Poodle Tiny màu nâu đỏ, kích thước nhỏ xinh, rất thông minh và năng động.",
        longDescription: "Poodle Tiny là dòng Poodle có kích thước nhỏ nhất trong các loại Poodle, rất được ưa chuộng làm thú cưng trong gia đình. Giống chó này nổi tiếng với trí thông minh, tính cách thân thiện và bộ lông xoăn không rụng. Poodle của chúng tôi được nuôi trong môi trường sạch sẽ, đảm bảo sức khỏe và có đầy đủ giấy tờ chứng nhận.",
        features: [
            "Đã tiêm phòng đầy đủ các loại vaccine",
            "Đã tẩy giun sán",
            "Được bác sĩ thú y kiểm tra",
            "Bảo hành sức khỏe 15 ngày",
            "Hỗ trợ huấn luyện cơ bản"
        ],
        images: [
            "img/Poodle Tiny.jpg",
            "img/Poodle Tiny1.jpg",
            "img/Poodle Tiny2.jpg",
            "img/Poodle Tiny3.jpg"
        ],
        reviews: [
            {
                name: "Vũ Thị E",
                rating: 5,
                date: "12/03/2024",
                comment: "Chú chó Poodle rất xinh xắn và thông minh. Rất hài lòng!"
            }
        ],
        relatedPets: [1, 5, 3]
    },
    5: {
        id: 5,
        name: "Mèo Maine Coon",
        type: "cat",
        age: "1 năm",
        gender: "Đực",
        price: 15000000,
        formattedPrice: "15.000.000₫",
        rating: 4.5,
        availability: "Đặt trước",
        description: "Mèo Maine Coon thuần chủng, đã tiêm phòng đầy đủ, tính cách hiền lành.",
        longDescription: "Maine Coon được biết đến là một trong những giống mèo lớn nhất với thân hình to khỏe, bộ lông dài và đuôi xù đặc trưng. Giống mèo này rất thông minh, điềm tĩnh và thân thiện, được mệnh danh là 'gentle giants' (người khổng lồ hiền lành). Maine Coon của chúng tôi được nhập khẩu từ những trại giống uy tín, đảm bảo thuần chủng và có sức khỏe tốt.",
        features: [
            "Thuần chủng 100%",
            "Đã tiêm phòng đầy đủ",
            "Đã được triệt sản",
            "Có giấy tờ chứng nhận nguồn gốc",
            "Được huấn luyện vệ sinh"
        ],
        images: [
            "img/Mèo Maine Coon",
            "img/Mèo Maine Coon1.jpg",
            "img/Mèo Maine Coon2.jpg",
            "img/Mèo Maine Coon3"
        ],
        reviews: [
            {
                name: "Hoàng Văn F",
                rating: 4,
                date: "01/03/2024",
                comment: "Mèo rất đẹp và to khỏe, tuy nhiên hơi nhút nhát lúc mới về nhà."
            }
        ],
        relatedPets: [2, 1, 4]
    },
    6: {
        id: 6,
        name: "Hamster Bear",
        type: "hamster",
        age: "1 tháng",
        gender: "Đực/Cái",
        price: 150000,
        formattedPrice: "150.000₫",
        rating: 4,
        availability: "Có sẵn",
        description: "Chuột Hamster Bear màu vàng nâu, rất năng động và thích hợp cho người mới nuôi.",
        longDescription: "Hamster Bear (hay còn gọi là Hamster Gấu) là một trong những giống chuột Hamster phổ biến nhất với kích thước nhỏ nhắn, bộ lông mềm mại và đa dạng về màu sắc. Loài chuột này có tính cách hiền lành, dễ gần và thích hợp cho cả người lớn và trẻ em làm thú cưng. Hamster của chúng tôi được nuôi trong môi trường sạch sẽ và được chăm sóc cẩn thận.",
        features: [
            "Kích thước nhỏ nhắn, dễ nuôi",
            "Nhiều màu sắc đa dạng",
            "Sức khỏe tốt",
            "Tặng kèm thức ăn cho 7 ngày đầu",
            "Hướng dẫn chăm sóc chi tiết"
        ],
        images: [
            "img/chuot1.webp",
            "img/chuotâ.jpg",
            "img/chuot3.png",
            "img/chuot4.jpg"
        ],
        reviews: [
            {
                name: "Nguyễn Thị G",
                rating: 4,
                date: "08/03/2024",
                comment: "Chuột Hamster rất dễ thương và dễ chăm sóc, con tôi rất thích."
            }
        ],
        relatedPets: [3, 2, 1]
    }
};

// Lấy thông tin thú cưng từ query parameter
function getPetIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const petId = parseInt(urlParams.get('id'));
    return petId;
}

// Format số tiền thành định dạng tiền Việt Nam
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
        .format(amount)
        .replace(/\s₫/, '₫');
}

// Render xếp hạng sao
function renderStarRating(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star text-warning"></i>';
        } else if (i - rating < 1) {
            starsHtml += '<i class="fas fa-star-half-alt text-warning"></i>';
        } else {
            starsHtml += '<i class="far fa-star text-warning"></i>';
        }
    }
    return starsHtml;
}

// Hiển thị chi tiết thông tin thú cưng
function displayPetDetails() {
    const petId = getPetIdFromUrl();
    const pet = petData[petId];
    
    if (!pet) {
        // Hiển thị thông báo không tìm thấy thú cưng
        $('#pet-detail-container').html('<div class="alert alert-danger">Không tìm thấy thông tin thú cưng!</div>');
        return;
    }
    
    // Cập nhật tiêu đề trang
    document.title = `${pet.name} - PetHaven`;
    
    // Cập nhật thông tin chính
    $('#pet-name').text(pet.name);
    $('#pet-price').text(pet.formattedPrice);
    $('#pet-rating').html(renderStarRating(pet.rating));
    $('#pet-review-count').text(pet.reviews?.length || 0);
    $('#pet-description').text(pet.longDescription);
    
    // Cập nhật thông tin cơ bản
    $('#pet-type').text(getPetTypeName(pet.type));
    $('#pet-age').text(pet.age);
    $('#pet-gender').text(pet.gender);
    $('#pet-availability').text(pet.availability);
    
    // Cập nhật danh sách đặc điểm
    const featuresHtml = pet.features.map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('');
    $('#pet-features').html(featuresHtml);
    
    // Cập nhật gallery ảnh
    updateGallery(pet.images);
    
    // Cập nhật đánh giá
    updateReviews(pet.reviews);
    
    // Cập nhật thú cưng liên quan
    updateRelatedPets(pet.relatedPets);
    
    // Cập nhật nút thêm vào giỏ hàng
    $('#add-to-cart-btn').attr('data-id', pet.id);
    $('#add-to-cart-btn').attr('data-name', pet.name);
    $('#add-to-cart-btn').attr('data-price', pet.price);
}

// Chuyển đổi mã loại thú cưng thành tên tiếng Việt
function getPetTypeName(typeCode) {
    const typeMap = {
        'dog': 'Chó',
        'cat': 'Mèo',
        'bird': 'Chim',
        'rabbit': 'Thỏ',
        'hamster': 'Chuột Hamster'
    };
    return typeMap[typeCode] || typeCode;
}

// Cập nhật gallery ảnh
function updateGallery(images) {
    // Xóa gallery hiện tại
    $('#gallery-main').empty();
    $('#gallery-thumbnails').empty();
    
    // Thêm ảnh chính
    if (images.length > 0) {
        $('#gallery-main').html(`
            <div class="main-image-container">
                <img src="${images[0]}" class="img-fluid rounded" id="main-image" alt="Hình ảnh thú cưng">
            </div>
        `);
        
        // Thêm thumbnails
        images.forEach((img, index) => {
            const activeClass = index === 0 ? 'active' : '';
            $('#gallery-thumbnails').append(`
                <div class="col-3 mb-2">
                    <img src="${img}" class="img-thumbnail thumbnail-image ${activeClass}" 
                         alt="Thumbnail ${index + 1}" data-index="${index}">
                </div>
            `);
        });
    } else {
        // Hiển thị ảnh mặc định nếu không có ảnh
        $('#gallery-main').html(`
            <div class="main-image-container">
                <img src="images/no-image.jpg" class="img-fluid rounded" id="main-image" alt="Không có hình ảnh">
            </div>
        `);
    }
    
    // Xử lý sự kiện click vào thumbnail
    $('.thumbnail-image').on('click', function() {
        const imgSrc = $(this).attr('src');
        $('#main-image').attr('src', imgSrc);
        $('.thumbnail-image').removeClass('active');
        $(this).addClass('active');
    });
}

// Cập nhật phần đánh giá
function updateReviews(reviews) {
    const reviewsContainer = $('#reviews-container');
    reviewsContainer.empty();
    
    if (!reviews || reviews.length === 0) {
        reviewsContainer.html('<p class="text-muted">Chưa có đánh giá nào cho sản phẩm này.</p>');
        return;
    }
    
    reviews.forEach(review => {
        reviewsContainer.append(`
            <div class="review-item mb-3 pb-3 border-bottom">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <h6 class="mb-0">${review.name}</h6>
                    <small class="text-muted">${review.date}</small>
                </div>
                <div class="mb-2">
                    ${renderStarRating(review.rating)}
                </div>
                <p class="mb-0">${review.comment}</p>
            </div>
        `);
    });
}

// Cập nhật phần thú cưng liên quan
function updateRelatedPets(relatedPetIds) {
    const relatedContainer = $('#related-pets-container');
    relatedContainer.empty();
    
    if (!relatedPetIds || relatedPetIds.length === 0) {
        relatedContainer.html('<p class="text-muted">Không có thú cưng liên quan.</p>');
        return;
    }
    
    relatedPetIds.forEach(id => {
        const pet = petData[id];
        if (pet) {
            relatedContainer.append(`
                <div class="col-md-4 col-sm-6 mb-4">
                    <div class="card h-100">
                        <img src="${pet.images[0]}" class="card-img-top" alt="${pet.name}">
                        <div class="card-body">
                            <h5 class="card-title">${pet.name}</h5>
                            <p class="text-muted">${pet.age}, ${pet.gender}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="pet-price">${pet.formattedPrice}</span>
                                <span class="pet-rating">
                                    ${renderStarRating(pet.rating)}
                                </span>
                            </div>
                            <div class="mt-3">
                                <a href="pet-detail.html?id=${pet.id}" class="btn btn-outline-primary w-100">Xem chi tiết</a>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        }
    });
}

// Xử lý giỏ hàng
function setupCartFunctionality() {
    // Lấy giỏ hàng từ local storage
    function getCart() {
        const cart = localStorage.getItem('petHavenCart');
        return cart ? JSON.parse(cart) : [];
    }
    
    // Lưu giỏ hàng vào local storage
    function saveCart(cart) {
        localStorage.setItem('petHavenCart', JSON.stringify(cart));
    }
    
    // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện
    function updateCartCount() {
        const cart = getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        $('.cart-badge').text(totalItems);
    }
    
    // Thêm sản phẩm vào giỏ hàng
    $('#add-to-cart-btn').on('click', function() {
        const petId = parseInt($(this).attr('data-id'));
        const petName = $(this).attr('data-name');
        const petPrice = parseInt($(this).attr('data-price'));
        const quantity = parseInt($('#quantity').val() || 1);
        
        const cart = getCart();
        
        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        const existingItemIndex = cart.findIndex(item => item.id === petId);
        
        if (existingItemIndex >= 0) {
            // Nếu đã có, tăng số lượng
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Nếu chưa có, thêm mới
            cart.push({
                id: petId,
                name: petName,
                price: petPrice,
                quantity: quantity,
                image: petData[petId]?.images[0] || ''
            });
        }
        
        // Lưu giỏ hàng và cập nhật giao diện
        saveCart(cart);
        updateCartCount();
        
        // Hiển thị thông báo thành công
        showToast('Thêm vào giỏ hàng thành công!');
        
        // Tùy chọn: Hiển thị modal giỏ hàng
        // $('#cartModal').modal('show');
    });
    
    // Xử lý nút tăng/giảm số lượng
    $('#quantity-minus').on('click', function() {
        let value = parseInt($('#quantity').val());
        if (value > 1) {
            $('#quantity').val(value - 1);
        }
    });
    
    $('#quantity-plus').on('click', function() {
        let value = parseInt($('#quantity').val());
        $('#quantity').val(value + 1);
    });
    
    // Khởi tạo số lượng giỏ hàng khi tải trang
    updateCartCount();
}

// Hiển thị thông báo toast
function showToast(message) {
    // Tạo hoặc cập nhật thông báo toast
    if ($('#toast-container').length === 0) {
        $('body').append(`
            <div id="toast-container" class="position-fixed bottom-0 end-0 p-3" style="z-index: 1050">
                <div id="toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <strong class="me-auto">PetHaven</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">${message}</div>
                </div>
            </div>
        `);
    } else {
        $('.toast-body').text(message);
    }
    
    const toastEl = document.getElementById('toast');
    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();
}

// Khởi tạo trang chi tiết
$(document).ready(function() {
    // Hiển thị chi tiết thú cưng
    displayPetDetails();
    
    // Thiết lập chức năng giỏ hàng
    setupCartFunctionality();
    
    // Xử lý chức năng đánh giá
    $('#review-form').on('submit', function(e) {
        e.preventDefault();
        const name = $('#review-name').val();
        const rating = $('#review-rating').val();
        const comment = $('#review-comment').val();
        
        // Lấy ngày hiện tại
        const today = new Date();
        const date = today.getDate().toString().padStart(2, '0') + '/' +
                    (today.getMonth() + 1).toString().padStart(2, '0') + '/' +
                    today.getFullYear();
        
        // Thêm đánh giá mới
        const petId = getPetIdFromUrl();
        if (petData[petId] && petData[petId].reviews) {
            petData[petId].reviews.unshift({
                name: name,
                rating: parseInt(rating),
                date: date,
                comment: comment
            });
            
            // Cập nhật lại phần đánh giá
            updateReviews(petData[petId].reviews);
            
            // Reset form
            this.reset();
            
            // Thông báo thành công
            showToast('Cảm ơn bạn đã gửi đánh giá!');
        }
    });
    
    // Xử lý chức năng zoom ảnh
    $(document).on('click', '#main-image', function() {
        const imgSrc = $(this).attr('src');
        $('body').append(`
            <div class="image-zoom-modal" onclick="this.remove()">
                <div class="image-zoom-container">
                    <img src="${imgSrc}" class="zoomed-image" alt="Hình ảnh lớn">
                </div>
            </div>
        `);
    });
});