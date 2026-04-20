import pandas as pd

# Data for Tuy Hoa (Phu Yen) - 20 spots
tuy_hoa_data = [
    ["Bánh Mì Chấm Nguyễn Huệ", "94 Nguyễn Huệ", "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Chấm+Nguyễn+Huệ+Tuy+Hòa"],
    ["Bánh Canh Hẹ Thành Tùng", "53 Điện Biên Phủ", "https://www.google.com/maps/search/?api=1&query=Bánh+Canh+Hẹ+Thành+Tùng+Tuy+Hòa"],
    ["Quán Bà Tám (Ocean Tuna Eye)", "289 Lê Duẩn", "https://www.google.com/maps/search/?api=1&query=Quán+Bà+Tám+Tuy+Hòa+289+Lê+Duẩn"],
    ["Cơm Gà Tuyết Nhung", "189 Lê Thánh Tôn", "https://www.google.com/maps/search/?api=1&query=Cơm+Gà+Tuyết+Nhung+Tuy+Hòa"],
    ["Cơm Niêu Năm Ánh", "394 Hùng Vương", "https://www.google.com/maps/search/?api=1&query=Cơm+Niêu+Năm+Ánh+Tuy+Hòa"],
    ["Nem Nướng Nhật Hoàng", "04 Trần Bình Trọng", "https://www.google.com/maps/search/?api=1&query=Nem+Nướng+Nhật+Hoàng+Tuy+Hòa"],
    ["Huy Tùng Coffee", "125 Nguyễn Trãi", "https://www.google.com/maps/search/?api=1&query=Huy+Tùng+Coffee+Tuy+Hòa"],
    ["Noon Concept", "An Dương Vương", "https://www.google.com/maps/search/?api=1&query=Noon+Concept+Tuy+Hòa"],
    ["Bè nổi Vi Anh", "Vũng Rô Bay", "https://www.google.com/maps/search/?api=1&query=Bè+nổi+Vi+Anh+Vũng+Rô"],
    ["Bè nổi Thanh Niên", "Vũng Rô Bay", "https://www.google.com/maps/search/?api=1&query=Bè+nổi+Thanh+Niên+Vũng+Rô"],
    ["Koi Cafe", "An Dương Vương", "https://www.google.com/maps/search/?api=1&query=Koi+Cafe+Tuy+Hòa"],
    ["Quán Tuấn (Lagoon Seafood)", "Đầm Ô Loan", "https://www.google.com/maps/search/?api=1&query=Quán+Tuấn+Đầm+Ô+Loan"],
    ["Nhà hàng Thúy Kiều", "An Hải", "https://www.google.com/maps/search/?api=1&query=Nhà+hàng+Thúy+Kiều+An+Hải"],
    ["Bún cá Đất Phú", "169 Lê Thánh Tôn", "https://www.google.com/maps/search/?api=1&query=Bún+cá+Đất+Phú+Tuy+Hòa"],
    ["Cháo Hàu 373", "373 Nguyễn Huệ", "https://www.google.com/maps/search/?api=1&query=Cháo+Hàu+373+Tuy+Hòa"],
    ["Alice Tea Room", "28 Cần Vương", "https://www.google.com/maps/search/?api=1&query=Alice+Tea+Room+Tuy+Hòa"],
    ["Wait Coffee", "79 Lương Văn Chánh", "https://www.google.com/maps/search/?api=1&query=Wait+Coffee+79+Lương+Văn+Chánh"],
    ["Quán Chóp Chài (Goat Hotpot)", "Chóp Chài Mountain", "https://www.google.com/maps/search/?api=1&query=Quán+Chóp+Chài+Tuy+Hòa"],
    ["Bánh Hỏi Lòng Heo Yến", "118 Hùng Vương", "https://www.google.com/maps/search/?api=1&query=Bánh+Hỏi+Lòng+Heo+Yến+Tuy+Hòa"],
    ["PHD Book & Coffee", "City Center", "https://www.google.com/maps/search/?api=1&query=PHD+Book+and+Coffee+Tuy+Hòa"]
]

# Data for Quy Nhon (Binh Dinh) - 20 spots
quy_nhon_data = [
    ["Bếp Nhà Xứ Nẫu", "68 Nam Cao", "https://www.google.com/maps/search/?api=1&query=Bếp+Nhà+Xứ+Nẫu+Quy+Nhơn"],
    ["Lẩu Cua Ông Minh", "29 Diên Hồng", "https://www.google.com/maps/search/?api=1&query=Lẩu+Cua+Ông+Minh+Quy+Nhơn"],
    ["Surf Bar", "Xuân Diệu Beach", "https://www.google.com/maps/search/?api=1&query=Surf+Bar+Quy+Nhơn"],
    ["Hương Dương Seafood", "Nhơn Hải Village", "https://www.google.com/maps/search/?api=1&query=Hương+Dương+Seafood+Nhơn+Hải"],
    ["Bún cá Ngọc Liên", "379 Nguyễn Huệ", "https://www.google.com/maps/search/?api=1&query=Bún+cá+Ngọc+Liên+Quy+Nhơn"],
    ["Gia Vỹ 2 (Bánh Xèo)", "14 Diên Hồng", "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+Gia+Vỹ+2+Quy+Nhơn"],
    ["Adiuvat Coffee Roasters", "57a Nguyễn Huệ", "https://www.google.com/maps/search/?api=1&query=Adiuvat+Coffee+Roasters+Quy+Nhơn"],
    ["Nhà Hàng Cánh Quạt", "Cát Tiến Area", "https://www.google.com/maps/search/?api=1&query=Nhà+Hàng+Cánh+Quạt+Cát+Tiến"],
    ["Ngô Văn Sở Food Street", "Ngô Văn Sở St", "https://www.google.com/maps/search/?api=1&query=Ngô+Văn+Sở+Food+Street+Quy+Nhơn"],
    ["Chè Nhớ", "134 Ngô Mây", "https://www.google.com/maps/search/?api=1&query=Chè+Nhớ+Quy+Nhơn"],
    ["Marina Coffee", "05 Đô Đốc Bảo", "https://www.google.com/maps/search/?api=1&query=Marina+Coffee+Quy+Nhơn"],
    ["Bốn Mùa - Four Seasons", "Xuân Diệu", "https://www.google.com/maps/search/?api=1&query=Bốn+Mùa+Four+Seasons+Quy+Nhơn"],
    ["Bánh Căn Cô Dư", "63/1 Nguyễn Huệ", "https://www.google.com/maps/search/?api=1&query=Bánh+Căn+Cô+Dư+Quy+Nhơn"],
    ["Big Tree Bistro", "Bãi Xép Village", "https://www.google.com/maps/search/?api=1&query=Big+Tree+Bistro+Bãi+Xép+Quy+Nhơn"],
    ["Life's A Beach", "Bãi Xép Village", "https://www.google.com/maps/search/?api=1&query=Life's+A+Beach+Quy+Nhơn"],
    ["East West Brewery", "Xuân Diệu", "https://www.google.com/maps/search/?api=1&query=East+West+Brewery+Quy+Nhơn"],
    ["Bún Chả Cá Phượng Tèo", "211 Nguyễn Huệ", "https://www.google.com/maps/search/?api=1&query=Bún+Chả+Cá+Phượng+Tèo+Quy+Nhơn"],
    ["Hải sản Chúc Xíu", "Near Port", "https://www.google.com/maps/search/?api=1&query=Hải+sản+Chúc+Xíu+Quy+Nhơn"],
    ["Bánh Hỏi Lòng Heo Mẫn", "76A Trần Phú", "https://www.google.com/maps/search/?api=1&query=Bánh+Hỏi+Lòng+Heo+Mẫn+Quy+Nhơn"],
    ["1990 Cafe", "City Center", "https://www.google.com/maps/search/?api=1&query=1990+Cafe+Quy+Nhơn"]
]

# Data for Danang (City Center) - 10 spots
danang_data = [
    ["Mái Phố", "K27A/2 Thái Phiên", "https://www.google.com/maps/search/?api=1&query=Mái+Phố+Đà+Nẵng"],
    ["Little Hanoi Egg Coffee", "65 Đỗ Bá", "https://www.google.com/maps/search/?api=1&query=Little+Hanoi+Egg+Coffee+Đà+Nẵng"],
    ["Bun Cha Quyen's House", "14 Lý Văn Tố", "https://www.google.com/maps/search/?api=1&query=Bun+Cha+Quyen's+House+Đà+Nẵng"],
    ["Eco Green Cafe & Bistro", "1 An Thượng 3", "https://www.google.com/maps/search/?api=1&query=Eco+Green+Cafe+Bistro+Đà+Nẵng"],
    ["SIX ON SIX Cafe", "64 Bà Huyện Thanh Quan", "https://www.google.com/maps/search/?api=1&query=SIX+ON+SIX+Cafe+Đà+Nẵng"],
    ["Mỳ Quảng Bà Mua", "19 Trần Bình Trọng", "https://www.google.com/maps/search/?api=1&query=Mỳ+Quảng+Bà+Mua+19+Trần+Bình+Trọng"],
    ["Bánh Xèo Bà Dưỡng", "K280/23 Hoàng Diệu", "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+Bà+Dưỡng+Đà+Nẵng"],
    ["43 Factory Coffee", "422 Ngô Thì Sỹ", "https://www.google.com/maps/search/?api=1&query=43+Factory+Coffee+Đà+Nẵng"],
    ["Cafe Long", "123 Lê Lợi", "https://www.google.com/maps/search/?api=1&query=Cafe+Long+123+Lê+Lợi+Đà+Nẵng"],
    ["Thìa Gỗ Đà Nẵng", "53 Phan Thúc Duyện", "https://www.google.com/maps/search/?api=1&query=Thìa+Gỗ+Đà+Nẵng"]
]

# Column names
cols = ["Name", "Address", "Google Maps Link"]

# Create DataFrames
df_tuy_hoa = pd.DataFrame(tuy_hoa_data, columns=cols)
df_quy_nhon = pd.DataFrame(quy_nhon_data, columns=cols)
df_danang = pd.DataFrame(danang_data, columns=cols)

# Write to Excel
with pd.ExcelWriter('travel_backup_food_list_with_links.xlsx', engine='openpyxl') as writer:
    df_tuy_hoa.to_excel(writer, sheet_name='Tuy Hoa (Phu Yen)', index=False)
    df_quy_nhon.to_excel(writer, sheet_name='Quy Nhon (Binh Dinh)', index=False)
    df_danang.to_excel(writer, sheet_name='Danang', index=False)

print("Excel file 'travel_backup_food_list_with_links.xlsx' created successfully!")