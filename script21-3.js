function countWords(text) {
    // Chuyển toàn bộ văn bản thành chữ thường
    text = text.toLowerCase();

    // Loại bỏ dấu câu và chia văn bản thành mảng các từ
    let words = text.match(/\b\w+\b/g);

    // Tạo đối tượng lưu trữ số lần xuất hiện của từng từ
    let wordCount = {};

    // Đếm số lần xuất hiện của từng từ
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    return wordCount;
}

// Yêu cầu người dùng nhập đoạn văn bản
let userInput = prompt("Nhập đoạn văn bản:");

// Kiểm tra xem người dùng có nhập không
if (userInput) {
    let result = countWords(userInput);

    // Hiển thị kết quả
    console.log("Số lần xuất hiện của từng từ:");
    for (let word in result) {
        console.log(`${word}: ${result[word]}`);
    }
} else {
    console.log("Bạn chưa nhập đoạn văn bản.");
}
