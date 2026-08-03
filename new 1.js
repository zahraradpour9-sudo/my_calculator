// تابع اصلی جمع با توضیح کامل
function calculateSum() {
    // 1. گرفتن مقادیر از ورودی‌ها
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    // 2. پیدا کردن محل نمایش نتیجه
    let resultDiv = document.getElementById('result');
    
    // 3. اعتبارسنجی: آیا کاربر عدد وارد کرده؟
    if (num1 === '' || num2 === '') {
        resultDiv.innerHTML = `
            <div class="error">⚠️ لطفاً هر دو عدد را وارد کن!</div>
        `;
        return; // از تابع خارج میشه
    }
    
    // 4. تبدیل رشته به عدد (مهم!)
    let number1 = Number(num1);
    let number2 = Number(num2);
    
    // 5. اعتبارسنجی: آیا واقعاً عدد هست؟
    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.innerHTML = `
            <div class="error">⚠️ لطفاً فقط عدد وارد کن! (مثلاً ۵ یا ۳.۵)</div>
        `;
        return;
    }
    
    // 6. اجرای عملیات جمع
    let sum = number1 + number2;
    
    // 7. ساخت توضیح کامل ریاضی
    let explanation = `
        <div class="answer">✅ جواب: ${number1} + ${number2} = ${sum}</div>
        <div class="explanation">
            📖 <strong>توضیح:</strong><br>
            • عدد اول (${number1}) را با عدد دوم (${number2}) جمع کردیم.<br>
            • در ریاضیات، عمل جمع به معنی <strong>افزایش</strong> مقدار است.<br>
            • وقتی ${number1} را با ${number2} جمع می‌کنیم، 
            نتیجه <strong>${sum}</strong> می‌شود.<br>
            • دلیل: ${number1} + ${number2} = 
            ${number1 > 0 && number2 > 0 ? 'هر دو عدد مثبت هستند، پس نتیجه بزرگتر از هر دو عدد است' : 
              number1 < 0 && number2 < 0 ? 'هر دو عدد منفی هستند، پس نتیجه منفی‌تر می‌شود' : 
              'یکی از اعداد مثبت و دیگری منفی است، پس تفاوت آنها محاسبه می‌شود'}.
        </div>
    `;
    
    // 8. نمایش نتیجه در صفحه
    resultDiv.innerHTML = explanation;
}

// 9. اضافه کردن قابلیت اینتر (Enter) برای راحتی کاربر
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // اگر کاربر Enter زد، تابع جمع اجرا بشه
        calculateSum();
    }
});

// 10. پیام خوش‌آمدگویی در کنسول (برای برنامه‌نویس)
console.log('✅ ماشین حساب هوشمند بارگذاری شد!');
console.log('💡 کاربر میتواند دو عدد وارد کند و توضیح کامل جمع را ببیند.');