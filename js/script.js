$(document).ready(function() {
    // Smooth scrolling chỉ cho các liên kết có hash (#) và không có thuộc tính href chỉ đến trang khác
    $('a.nav-link').on('click', function(event) {
        // Kiểm tra xem liên kết có hash và href không chứa .html
        if (this.hash !== "" && !this.href.includes('.html')) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
        // Nếu liên kết có đuôi .html, cho phép chuyển trang bình thường
    });
    
    // Highlight menu khi scroll đến phần tương ứng
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        
        // Kiểm tra vị trí của các section
        $('section').each(function(i) {
            if ($(this).position().top - 100 <= scrollDistance) {
                $('.navbar-nav .nav-link.active').removeClass('active');
                $('.navbar-nav .nav-link').eq(i).addClass('active');
            }
        });
        
        // Animation cho các phần tử khi scroll
        $('.animate-up').each(function() {
            if ($(this).offset().top - $(window).height() + 20 < scrollDistance) {
                $(this).addClass('visible');
            }
        });
    }).scroll();
    
    // Thiết lập modal khi click vào button trong pricing
    $('#serviceModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var service = button.data('service');
        
        // Reset form
        $('#serviceForm')[0].reset();
        $('#serviceForm .is-invalid').removeClass('is-invalid');
        
        // Check checkbox tương ứng với service đã chọn
        $('#' + service + 'Service').prop('checked', true);
    });
    
    // Validate form trong modal service
    $(document).ready(function () {
        // Đảm bảo chỉ chọn 1 hoặc nhiều checkbox
    $('.form-check-input').on('change', function () {
        
    });

    
        // Validate form khi submit
        $('#serviceForm').on('submit', function (e) {
            e.preventDefault();
            var isValid = true;
    
            // Kiểm tra tên (không chứa số)
            var name = $('#name').val();
            if (name === '' || /\d/.test(name)) {
                $('#name').addClass('is-invalid');
                isValid = false;
            } else {
                $('#name').removeClass('is-invalid');
            }
    
            // Kiểm tra số điện thoại
            var phone = $('#phone').val();
            if (phone === '' || !/^0[0-9]{9}$/.test(phone)) {
                $('#phone').addClass('is-invalid');
                isValid = false;
            } else {
                $('#phone').removeClass('is-invalid');
            }
    
            // Kiểm tra email
            var email = $('#email').val();
            if (email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                $('#email').addClass('is-invalid');
                isValid = false;
            } else {
                $('#email').removeClass('is-invalid');
            }
    
            // Kiểm tra ít nhất một dịch vụ được chọn
        var checkedServices = $('.form-check-input:checked').length;
        if (checkedServices === 0) {
            $('#service-error').text("Vui lòng chọn ít nhất một dịch vụ").show();
            isValid = false;
        } else {
            $('#service-error').hide();
        }

        if (isValid) {
            alert('Cảm ơn quý khách! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.');
            $('#serviceModal').modal('hide');
            $('#serviceForm')[0].reset();
        }
    });
});
    
    // Validate form liên hệ
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        var isValid = true;
        
        // Kiểm tra tên (không được chứa số)
        var contactName = $('#contactName').val();
        if (contactName === '' || /\d/.test(contactName)) {
            $('#contactName').addClass('is-invalid');
            isValid = false;
        } else {
            $('#contactName').removeClass('is-invalid');
        }
        
        // Kiểm tra email
        var contactEmail = $('#contactEmail').val();
        if (contactEmail === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
            $('#contactEmail').addClass('is-invalid');
            isValid = false;
        } else {
            $('#contactEmail').removeClass('is-invalid');
        }
        
        // Kiểm tra độ dài nội dung tối thiểu 20 ký tự
        var contactMessage = $('#contactMessage').val();
        if (contactMessage.length < 20) {
            $('#contactMessage').addClass('is-invalid');
            isValid = false;
        } else {
            $('#contactMessage').removeClass('is-invalid');
        }
        
        // Nếu form hợp lệ, xử lý submit
        if (isValid) {
            // Mô phỏng việc gửi dữ liệu lên server
            alert('Cảm ơn quý khách đã gửi tin nhắn. Chúng tôi sẽ phản hồi sớm nhất có thể!');
            this.reset();
        }
    });
    
    // Hiệu ứng zoom ảnh sản phẩm
    $('.card-img-top').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );
    
    // Các chức năng tìm kiếm (mô phỏng)
    $('#banner form').submit(function(e) {
        e.preventDefault();
        var searchTerm = $(this).find('input[type="search"]').val();
        if (searchTerm.trim() !== '') {
            alert('Bạn đang tìm kiếm: ' + searchTerm);
            // Trong thực tế sẽ chuyển hướng đến trang kết quả tìm kiếm
        }
    });
});
// Lấy URL hiện tại
const currentPath = window.location.pathname.split("/").pop(); // lấy tên file
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPath) {
                link.classList.add('active');
            }
        });