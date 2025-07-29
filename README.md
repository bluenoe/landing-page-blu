# Bubu Coffee Landing Page

Landing page giới thiệu dịch vụ cà phê mang đi dành cho Gen Z - Bubu Coffee.

## 🚀 Cách sử dụng

1. **Clone hoặc download project**
2. **Mở file `index.html` trong trình duyệt** hoặc dùng Live Server
3. **Thay thế hình ảnh trong thư mục `assets/`** bằng hình ảnh thật của bạn

## 📁 Cấu trúc thư mục

```
landing-page-bubu/
├── index.html          # Trang chính
├── style.css           # File CSS
├── script.js           # File JavaScript
├── README.md           # Hướng dẫn
└── assets/             # Thư mục chứa hình ảnh
    ├── coffee1.jpg     # Hình cà phê sữa đá
    ├── coffee2.jpg     # Hình Cold Brew
    ├── coffee3.jpg     # Hình Matcha Latte
    ├── about.jpg       # Hình About section
    ├── avatar1.jpg     # Avatar khách hàng 1
    ├── avatar2.jpg     # Avatar khách hàng 2
    └── avatar3.jpg     # Avatar khách hàng 3
```

## 🎯 Tính năng

- **Responsive Design**: Hoạt động tốt trên desktop và mobile
- **Smooth Scrolling**: Cuộn mượt mà khi click menu
- **Mobile Menu**: Menu responsive với hamburger icon
- **Auto Slider**: Testimonials tự động chuyển slide
- **Contact Form**: Form liên hệ với validation và alert
- **Scroll Effects**: Navbar thay đổi khi scroll
- **Hover Effects**: Button và card có hiệu ứng hover

## 🎨 Thiết kế

- **Font**: Poppins (Google Fonts)
- **Màu sắc**: Pastel nâu (#8b6f47), kem (#f5f1eb), trắng
- **Layout**: Grid và Flexbox
- **Animations**: CSS transitions và transforms

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🛠️ Tuỳ chỉnh

### Thay đổi màu sắc
Chỉnh sửa biến màu trong `style.css`:
```css
:root {
    --primary-color: #8b6f47;
    --secondary-color: #f5f1eb;
    --accent-color: #d4a574;
}
```

### Thêm sản phẩm mới
Thêm vào phần Menu trong `index.html`:
```html
<div class="menu-item">
    <img src="assets/new-coffee.jpg" alt="Tên sản phẩm" class="menu-image">
    <h3>Tên sản phẩm</h3>
    <p class="price">Giá tiền</p>
</div>
```

### Thay đổi feedback
Chỉnh sửa phần Feedback trong `index.html`:
```html
<div class="feedback-item">
    <img src="assets/new-avatar.jpg" alt="Avatar" class="feedback-avatar">
    <h4>Tên khách hàng</h4>
    <p>"Nội dung feedback"</p>
</div>
```

## 📞 Liên hệ

Bubu Coffee
- Địa chỉ: 123 Nguyễn Trãi, Q.1, TP.HCM
- Giờ mở cửa: 7:00 - 22:00 hàng ngày
- Hotline: 0909-XXX-XXX

## 📝 License

MIT License - Feel free to use for personal or commercial projects.

## 🤝 Đóng góp

Mọi đóng góp và cải tiến đều được hoan nghênh! Hãy tạo Pull Request hoặc Issue.