
const languageSelect = document.getElementById("languageSelect");

const content = {
    english: {
       
        signin: "Sign in",
        mainTitle: "The biggest Indian hits. Ready to watch from ₹ 149.",
        mainSubtitle: "Join today. Cancel anytime.",
        mainDescription: "Ready to watch? Enter your email to create or restart your membership.",
        featureTitle: "Enjoy on your TV.",
        featuresSubTitle: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,Blu-ray players and more.",
        download: "Downloading...",
        featureTitle2: "Download your shows to watch offline",
        featuresSubTitle2: "Save your favourites easily and always have something to watch.",
        featureTitle3: "Watch everywhere.",
        featuresSubTitle3: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        featureTitle4: "Create profiles for children.",
        featuresSubTitle4: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
        faq: "Frequently Asked Questions",
        question1: "What is Netflix?", 
        answer1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more –on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without asingle ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
        question2: "How much does netflix cost?", 
        answer2: " Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
        question3: "Where can i watch?",
        answer3: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix withyou anywhere.",
        question4: "How do I cancel?",
        answer4: " Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        question5: " What can I watch from Netflix?",
        answer5: "  Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        question6: "Is Netflix good for kids?",
        answer6: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
        emaill2: " Ready to watch? Enter your email to create or restart your membership.",
        questions: "Questions?,  Dial 000-800-040-1843",
        FAQ: "FAQ",
        investor: "Investor Relations",
        privacy: "Privacy",
        speed: "Speed Test",
        help: "Help Centre",
        jobs: "Jobs",
        cookie: "Cookie Preferences",
        legal: "Legal Notices",
        acc: "Account",
        watch: "Ways to Watch",
        corporate: "Corporate Information",
        only: "Only on Netflix",
        media: "Media Centre",
        terms: "Terms of Use",
        contact: "Contact Us",
        N: "Netflix India-Done by Shruti Balachandran",
        start: "Get Started",
        Start: "Get Started",
       
    },
    hindi: {
        
        signin: "दाखिल करना",
        mainTitle: "सबसे बड़े भारतीय हिट। ₹ 149 से देखने के लिए तैयार।",
        mainSubtitle: "आज ही शामिल हों। कभी भी रद्द करें।",
        mainDescription: "तैयार हो देखने के लिए? अपना ईमेल दर्ज करें और अपनी सदस्यता बनाएं या पुनः प्रारंभ करें।",
        featureTitle: "अपने टीवी पर आनंद लें",
        featuresSubTitle: "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, ब्लू-रे प्लेयर और बहुत कुछ पर देखें",
        download: "डाउनलोड हो रहा है...",
        featureTitle2: "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें",
        featuresSubTitle2: "अपने पसंदीदा को आसानी से सहेजें और हमेशा देखने के लिए कुछ न कुछ रखें",
        featureTitle3: "हर जगह देखो",
        featuresSubTitle3: "अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर असीमित फिल्में और टीवी शो स्ट्रीम करें",
        featureTitle4: "बच्चों के लिए प्रोफ़ाइल बनाएं",
        featuresSubTitle4: "बच्चों को केवल उनके लिए बनाई गई जगह में उनके पसंदीदा पात्रों के साथ साहसिक यात्रा पर भेजें - आपकी सदस्यता के साथ निःशुल्क",
        faq: "अक्सर पूछे जाने वाले प्रश्नों",
        question1:   "नेटफ्लिक्स क्या है?",
        answer1: "नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जो विविध प्रकार की पेशकश करती है पुरस्कार विजेता टीवी शो, फिल्में, एनीमे, वृत्तचित्र और बहुत कुछ हजारों इंटरनेट से जुड़े उपकरणों पर। आप जब चाहें, जब चाहें, बिना ए के देख सकते हैं एकल विज्ञापन - सभी एक कम मासिक कीमत पर। हमेशा होता हैकुछ नया खोजा जाता है, और नए टीवी शो और फिल्में जोड़ी जाती हैं हर हफ्ते!",
        question2: "नेटफ्लिक्स की कीमत कितनी है?",
        answer2: "अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप आदि पर नेटफ्लिक्स देखें स्ट्रीमिंग डिवाइस, सभी एक निश्चित मासिक शुल्क पर। योजनाओं की सीमा ₹199 से ₹799 प्रति माह तक। कोई अतिरिक्त लागत नहीं, कोई अनुबंध नहीं।",
        question3: "मैं कहाँ देख सकता हूँ?",
        answer3: "कहीं भी, कभी भी, असीमित संख्या में डिवाइस पर देखें। संकेत वेब पर तुरंत देखने के लिए अपने नेटफ्लिक्स खाते से आपके पर्सनल कंप्यूटर से या किसी पर भी Netflix.com इंटरनेट से जुड़ा उपकरण जिसमें नेटफ्लिक्स ऐप भी शामिल है स्मार्ट टीवी, स्मार्टफोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल। आप iOS के साथ अपने पसंदीदा शो भी डाउनलोड कर सकते हैं, एंड्रॉइड, या विंडोज 10 ऐप। जब आप हों तो देखने के लिए डाउनलोड का उपयोग करें चलते-फिरते और बिना इंटरनेट कनेक्शन के। नेटफ्लिक्स को साथ लें आप कहीं भी.",
        question4: "मैं कैसे रद्द करूं?",
        answer4: "नेटफ्लिक्स लचीला है. कोई कष्टप्रद अनुबंध नहीं हैं और नहीं प्रतिबद्धताएँ आप अपना खाता ऑनलाइन दो भागों में आसानी से रद्द कर सकते हैं क्लिक. कोई रद्दीकरण शुल्क नहीं है - अपना प्रारंभ करें या बंद करें कभी भी खाता.",
        question5: "मैं नेटफ्लिक्स से क्या देख सकता हूँ?",
        answer5: "नेटफ्लिक्स के पास फीचर फिल्मों की एक विस्तृत लाइब्रेरी है, वृत्तचित्र, टीवी शो, एनीमे, पुरस्कार विजेता नेटफ्लिक्स मूल, और अधिक। जितना चाहो, जब चाहो देखो।",
        question6: "क्या नेटफ्लिक्स बच्चों के लिए अच्छा है?",
        answer6: "नेटफ्लिक्स किड्स अनुभव आपकी सदस्यता में शामिल है जब बच्चे परिवार-अनुकूल टीवी शो का आनंद लें तो माता-पिता को नियंत्रण दें और फ़िल्में अपने स्वयं के स्थान पर। बच्चों की प्रोफ़ाइल पिन-संरक्षित अभिभावकीय नियंत्रण के साथ आती हैं जो अनुमति देती हैं आप बच्चों द्वारा देखी जा सकने वाली सामग्री की परिपक्वता रेटिंग को प्रतिबंधित करते हैं उन विशिष्ट शीर्षकों को ब्लॉक करें जिन्हें आप नहीं चाहते कि बच्चे देखें।",
        emaill2: "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।",
        questions: "कुछ पूछना है?,डायल करें 000-800-040-1843 ",
        FAQ: "सामान्य प्रश्न",
        investor: "निवेशक संबंध",
        privacy: "गोपनीयता",
        speed: "गति परीक्षण",
        help: "सहायता केंद्र",
        jobs: "नौकरियां",
        cookie: "कुकी प्राथमिकताएँ",
        legal: "कानूनी नोटिस",
        acc: "खाता",
        watch: "देखने के तरीके",
        corporate: "कॉर्पोरेट जानकारी",
        only: "केवल नेटफ्लिक्स पर",
        media: "मीडिया केंद्र",
        terms: "उपयोग की शर्तें",
        contact: "संपर्क करें",
        N: "नेटफ्लिक्स भारत-श्रुति बालचंद्रन द्वारा किया गया",
        start: "शुरू करो",
        Start: "शुरू करो",
        
    }
};

languageSelect.addEventListener("change", function () {
    const selectedLanguage = languageSelect.value;

    // Update the content based on the selected language
    document.querySelector(".main-title").textContent = content[selectedLanguage].mainTitle;
    document.querySelector(".main-subtitle").textContent = content[selectedLanguage].mainSubtitle;
    document.querySelector(".main-description").textContent = content[selectedLanguage].mainDescription;
    document.querySelector(".sign-in").textContent = content[selectedLanguage].signin;
    document.querySelector(".feature-title").textContent = content[selectedLanguage].featureTitle;
    document.querySelector(".feature-sub-title").textContent = content[selectedLanguage].featuresSubTitle;
    document.querySelector(".download").textContent = content[selectedLanguage].download;
    document.querySelector(".feature-title2").textContent = content[selectedLanguage].featureTitle2;
    document.querySelector(".feature-sub-title2").textContent = content[selectedLanguage].featuresSubTitle2;
    document.querySelector(".feature-title3").textContent = content[selectedLanguage].featureTitle3;
    document.querySelector(".feature-sub-title3").textContent = content[selectedLanguage].featuresSubTitle3;
    document.querySelector(".feature-title4").textContent = content[selectedLanguage].featureTitle4;
    document.querySelector(".feature-sub-title4").textContent = content[selectedLanguage].featuresSubTitle4;
    document.querySelector(".faq").textContent = content[selectedLanguage].faq;
    document.querySelector(".question1").textContent = content[selectedLanguage].question1;
    document.querySelector(".answer1").textContent = content[selectedLanguage].answer1;
    document.querySelector(".question2").textContent = content[selectedLanguage].question2;
    document.querySelector(".answer2").textContent = content[selectedLanguage].answer2;
    document.querySelector(".question3").textContent = content[selectedLanguage].question3;
    document.querySelector(".answer3").textContent = content[selectedLanguage].answer3;
    document.querySelector(".question4").textContent = content[selectedLanguage].question4;
    document.querySelector(".answer4").textContent = content[selectedLanguage].answer4;
    document.querySelector(".question5").textContent = content[selectedLanguage].question5;
    document.querySelector(".answer5").textContent = content[selectedLanguage].answer2;
    document.querySelector(".question6").textContent = content[selectedLanguage].question6;
    document.querySelector(".answer6").textContent = content[selectedLanguage].answer6;
    document.querySelector(".answer6").textContent = content[selectedLanguage].answer6;
    document.querySelector(".emaill2").textContent = content[selectedLanguage].emaill2;
    document.querySelector(".questions").textContent = content[selectedLanguage].questions;
    document.querySelector(".FAQ").textContent = content[selectedLanguage].FAQ;
    document.querySelector(".investor").textContent = content[selectedLanguage].investor;
    document.querySelector(".privacy").textContent = content[selectedLanguage].privacy;
    document.querySelector(".speed").textContent = content[selectedLanguage].speed;
    document.querySelector(".help").textContent = content[selectedLanguage].help;
    document.querySelector(".jobs").textContent = content[selectedLanguage].jobs;
    document.querySelector(".cookie").textContent = content[selectedLanguage].cookie;
    document.querySelector(".legal").textContent = content[selectedLanguage].legal;
    document.querySelector(".acc").textContent = content[selectedLanguage].acc;
    document.querySelector(".watch").textContent = content[selectedLanguage].watch;
    document.querySelector(".corporate").textContent = content[selectedLanguage].corporate;
    document.querySelector(".only").textContent = content[selectedLanguage].only;
    document.querySelector(".media").textContent = content[selectedLanguage].media;
    document.querySelector(".terms").textContent = content[selectedLanguage].terms;
    document.querySelector(".contact").textContent = content[selectedLanguage].contact;
    document.querySelector(".N").textContent = content[selectedLanguage].N;
    document.querySelector(".start").textContent = content[selectedLanguage].start;
    document.querySelector(".Start").textContent = content[selectedLanguage].Start;
    
});

    

  const questionButtons = document.querySelectorAll(".Question");

  
  questionButtons.forEach((button) => {
      button.addEventListener("click", function () {
          // Get the associated answer element
          const answer = button.nextElementSibling;

          // Toggle the visibility of the answer
          if (answer.style.display === "none" || answer.style.display === "") {
              answer.style.display = "block";
          } else {
              answer.style.display = "none";
          }
      });
  });
   