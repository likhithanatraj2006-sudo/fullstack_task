function calculateAge() {

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (dob === "") {
        alert("Please select your Date of Birth");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const previousMonthDays =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();

        days += previousMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diff = today - birthDate;

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diff / (1000 * 60));
    const totalSeconds = Math.floor(diff / 1000);

    const dayNames = [
        "Sunday","Monday","Tuesday",
        "Wednesday","Thursday","Friday","Saturday"
    ];

    const birthDay = dayNames[birthDate.getDay()];

    const month = birthDate.getMonth() + 1;
    const date = birthDate.getDate();

    let zodiac = "";

    if ((month==3 && date>=21)||(month==4 && date<=19))
        zodiac="Aries ♈";
    else if ((month==4 && date>=20)||(month==5 && date<=20))
        zodiac="Taurus ♉";
    else if ((month==5 && date>=21)||(month==6 && date<=20))
        zodiac="Gemini ♊";
    else if ((month==6 && date>=21)||(month==7 && date<=22))
        zodiac="Cancer ♋";
    else if ((month==7 && date>=23)||(month==8 && date<=22))
        zodiac="Leo ♌";
    else if ((month==8 && date>=23)||(month==9 && date<=22))
        zodiac="Virgo ♍";
    else if ((month==9 && date>=23)||(month==10 && date<=22))
        zodiac="Libra ♎";
    else if ((month==10 && date>=23)||(month==11 && date<=21))
        zodiac="Scorpio ♏";
    else if ((month==11 && date>=22)||(month==12 && date<=21))
        zodiac="Sagittarius ♐";
    else if ((month==12 && date>=22)||(month==1 && date<=19))
        zodiac="Capricorn ♑";
    else if ((month==1 && date>=20)||(month==2 && date<=18))
        zodiac="Aquarius ♒";
    else
        zodiac="Pisces ♓";

    let nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const birthdayCountdown =
        Math.ceil(
            (nextBirthday - today) /
            (1000 * 60 * 60 * 24)
        );

    const meanings = {
        A:"Ambitious", B:"Brave", C:"Creative", D:"Determined",
        E:"Energetic", F:"Fearless", G:"Genius", H:"Helpful",
        I:"Intelligent", J:"Joyful", K:"Kind", L:"Leader",
        M:"Motivated", N:"Noble", O:"Optimistic", P:"Positive",
        Q:"Quick Learner", R:"Responsible", S:"Smart", T:"Talented",
        U:"Unique", V:"Victorious", W:"Wise", X:"Extraordinary",
        Y:"Young At Heart", Z:"Zealous"
    };

    let expansion = "";

    for(let letter of name.toUpperCase()){
        if(meanings[letter]){
            expansion += `${letter} - ${meanings[letter]}<br>`;
        }
    }

    const quotes = [
        "Success comes to those who never quit.",
        "Believe in yourself and keep moving forward.",
        "Your future is created by what you do today.",
        "Dream big and work hard.",
        "Every day is a new opportunity."
    ];

    const morals = [
        "Hard work beats talent when talent doesn't work hard.",
        "Patience and consistency lead to success.",
        "Never stop learning.",
        "Time is more valuable than money.",
        "Kindness costs nothing but means everything."
    ];

    const randomQuote =
        quotes[Math.floor(Math.random()*quotes.length)];

    const randomMoral =
        morals[Math.floor(Math.random()*morals.length)];

    document.getElementById("result").innerHTML = `

    <div class="result-box">👤 Name: ${name}</div>

    <div class="result-box">
    🌟 Name Expansion:<br><br>
    ${expansion}
    </div>

    <div class="result-box">
    🎂 Exact Age: ${years} Years, ${months} Months, ${days} Days
    </div>

    <div class="result-box">
    📅 Born On: ${birthDay}
    </div>

    <div class="result-box">
    ♈ Zodiac Sign: ${zodiac}
    </div>

    <div class="result-box">
    📆 Total Months: ${totalMonths.toLocaleString()}
    </div>

    <div class="result-box">
    🗓 Total Weeks: ${totalWeeks.toLocaleString()}
    </div>

    <div class="result-box">
    📅 Total Days: ${totalDays.toLocaleString()}
    </div>

    <div class="result-box">
    ⏰ Total Hours: ${totalHours.toLocaleString()}
    </div>

    <div class="result-box">
    ⏱ Total Minutes: ${totalMinutes.toLocaleString()}
    </div>

    <div class="result-box">
    ⌚ Total Seconds: ${totalSeconds.toLocaleString()}
    </div>

    <div class="result-box">
    🎉 Next Birthday In: ${birthdayCountdown} Days
    </div>

    <div class="result-box">
    💡 Quote:<br><br>
    "${randomQuote}"
    </div>

    <div class="result-box">
    📖 Moral:<br><br>
    "${randomMoral}"
    </div>
    `;
}