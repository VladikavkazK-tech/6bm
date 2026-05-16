// Данные о 10 созвездиях-воспоминаниях
const constellationsData = [
    {
        id: 'childhood',
        title: 'Первая кукла',
        text: 'Ты бережно хранила свою первую куклу, даже когда выросла — аккуратно убирала её на полку и протирала пыль. Помню, как ты показывала мне её и рассказывала, что это был подарок от бабушки на твой пятый день рождения. Эта кукла научила тебя заботе, а ты передала этот урок мне',
        story: 'Спасибо за уроки бережности и доброты, за то, что учила видеть ценность в каждой мелочи. С юбилеем, мама! Пусть в твоей жизни будет ещё много волшебных моментов!',
        image: 'https://sun9-88.userapi.com/s/v1/ig2/9dkqCnLW00PmQrV77CmT-cz_ZOsTowVy4zy3IkIkCRSkbY8pBmPsDZ2U-jh6KRykEjO3P7oT7hQlHfYWSvU10jvv.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=AdTRZ18fBONAkgZ4mvcoQq4B8LQxj0jC1K15tC8AUJk&cs=1280x0'
    },
    {
        id: 'childhood',
        title: 'Велосипед и ветер в волосах',
        text: 'Ты научила меня кататься на велосипеде, терпеливо поддерживая за спину, пока я не поехала сама. Я помню твой голос: „Не бойся, я рядом!“ — и как ты бежала следом, пока я училась держать равновесие. Тот день стал символом твоей поддержки во всех моих начинаниях',
        story: 'Спасибо, что всегда была моей опорой — не только в детстве, но и в подростковой жизни. С 45 летием, мамуля! Пусть впереди будет много новых дорог и приключений!',
        image: 'https://sun9-62.userapi.com/s/v1/ig2/lA_aGaJspAqzc6qbXsuLKIibA6E5rnNp-M53MC2MHtN5OI3OAHPwbObL9wwNVPkdN_ZSq1tr8AYNotyEkwt4tXHG.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1280x0'
    },
    {
        id: 'childhood',
        title: 'Сказки на ночь',
        text: 'Даже когда ты очень уставала после работы, ты находила силы прочитать мне сказку или придумать свою — с драконами, принцессами и волшебными лесами. Я засыпала под твой голос, чувствуя себя в полной безопасности. Эти моменты стали для меня символом домашнего тепла.',
        story: 'Твоя любовь — лучшая сказка, которую я знаю. С 45 летием, волшебница! Пусть твоя жизнь будет наполнена чудесами, а рядом всегда будут те, кто ценит твоё доброе сердце!',
        image: 'https://sun9-18.userapi.com/s/v1/ig2/rP9dYJ5NbHaqAU4SQN53yj3KlgpE1w8IJ8tBy8_r4ztBEe9HQZ0sWJwWbARszs3leAqhnSCTB0yh9q7r0uMN3i51.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1280x0'
    },
    {
        id: 'childhood',
        title: 'Семейные завтраки',
        text: 'Каждое воскресенье начиналось с твоих сырных палочек с брусничным соусом и кофе — аромат разносился по всему дому. Мы сидели за столом, делились планами на неделю и просто смеялись. Эти завтраки стали нашей семейной традицией, которую я бережно храню в памяти',
        story: 'Спасибо за тепло этих моментов, за уют и ощущение, что дом — это там, где ты. С днём рождения, родная! Пусть каждое утро приносит тебе радость и вдохновение!',
        image: 'https://sun9-51.userapi.com/s/v1/ig2/DGDQ77Dm2PkCLQ9UmwlAJb4Y-IzgLANNsAxtnlazX4PBo1zx5qeKGUrqm32f0SuZfLtzkzZxQNqIvuiVn5mJqoYV.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=GjqD_Gpacbi0l9lOwkzklpPNh7K2tQoXOxhN14xu4RQ&cs=1280x0'
    },
    {
        id: 'childhood',
        title: 'Садовые цветы',
        text: 'Ты выращивала цветы с такой заботой — поливала, обрезала лишние ветки и разговаривала с ними, как с живыми. Я наблюдала, как из маленького ростка появлялся бутон, а потом распускался прекрасный цветок. Ты говорила, что цветы, как и люди, нуждаются в любви и внимании',
        story: 'Цвети и радуй нас ещё много лет, как эти розы! С 45 летием! Пусть твой сад, как и твоя душа, всегда будет полон красоты, гармонии и радости!',
        image: 'https://sun9-2.userapi.com/s/v1/ig2/bxLXk6xFz9WccttoLLMubon96YZ0wVneHDXpq_A1ZD6QgQmuZcbyyLnq6Hz2h4snDeWXKz5XOQpsrsLU5awbCPeb.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,768x1024&from=bu&u=4maqkU1mpakyXz8ULRIcYRvxjOCzsnEHk-cdac8iSeI&cs=768x0'
    },
    {
        id: 'childhood',
        title: 'Первый рабочий день',
        text: 'Я помню твой первый рабочий день — ты волновалась, но шла вперёд с улыбкой. Ты рассказывала, как знакомилась с коллегами, осваивала новые обязанности и постепенно становилась профессионалом. Теперь тебя уважают в коллективе, а твои советы ценят все, кто с тобой работает',
        story: 'Горжусь тобой и восхищаюсь твоей стойкостью! Пусть юбилей принесёт новые возможности, интересные проекты и признание твоих заслуг. С праздником, мамуличка!',
        image: 'https://sun4-20.userapi.com/s/v1/ig2/kj8MKfhLl2hmIARXY1oqDahWF6g8SGzKw8qW0zW4X9UhnJbTAnUSl7tWIPFucUwUCri-Kj5CeA1rgeoCWowoDW6k.jpg?quality=95&as=32x43,48x64,72x96,108x143,160x213,240x319,360x478,480x638,540x717,640x850,720x957,1080x1435,1280x1700,1440x1913,1927x2560&from=bu&cs=1280x0'
    },
    {
        id: 'childhood',
        title: 'Кулинарные шедевры',
        text: 'Твои кулинарные шедевры — это не просто еда, а кусочек счастья: я помню, как мы вместе замешивали тесто, а ты учила меня правильно добавлять специи. Аромат ванили наполнял дом уютом, а каждое блюдо было изысканным. Эти моменты научили меня, что настоящая магия создаётся руками и сердцем',
        story: 'Пусть жизнь будет такой же сладкой, как твои рецепты, такой же ароматной, как твоя еда, и такой же тёплой, как семейные обеды. Люблю тебя, мама!',
        image: 'https://sun9-30.userapi.com/s/v1/ig2/RfMTMGk_LIB_rUiiehTJ8hbt0BT5kZggpqL8rPlSB310IazR3qYciN259PDrS1kdbegpwOwgP-uTpDn7Hdc53JEQ.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x181,360x271,480x361,540x406,640x482,720x542,1080x813,1280x963,1440x1084,2560x1927&from=bu&cs=1280x0'
    },
    {
        id: 'childhood',
        title: 'Бесконечная поддержка',
        text: 'Ты верила в меня, даже когда я сама сомневалась — напоминала о моих сильных сторонах и помогала найти выход из сложных ситуаций. Я помню, как перед контрольными ты всегда говорила: „У тебя всё получится, я в тебя верю!“, — и эти слова давали мне силы собраться. Твоя поддержка стала моим внутренним стержнем',
        story: 'Спасибо за веру, за то, что всегда стоишь за моей спиной. В твои 45 желаю, чтобы мир верил в тебя так же безоговорочно, а рядом были люди, которые ценят твою доброту и мудрость!',
        image: 'https://sun9-17.userapi.com/s/v1/ig2/i7YJHgCtC5VSg-guy5aurpkbvLh56OQwtOlRSihSoiHQh0CSihItsH1QJBxXLRSXvPzWxmlATQjqCumFXbJMNxxR.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=-q8XFthULQCqcTufrqQseD2qCG_77TXxtfn6diniauw&cs=1280x0'
    },
    {
        id: 'childhood',
        title: 'Мудрый совет',
        text: 'Твои слова всегда помогали найти выход из любой ситуации — ты умела посмотреть на проблему под другим углом и подсказать верное решение. Я помню, как в трудный период ты сказала: „Всё проходит, и это пройдёт“, — и я вдруг увидела свет в конце тоннеля. Твоя мудрость — это дар, который ты щедро даришь всем нам',
        story: 'Пусть мудрость приносит радость и удачу, а каждый твой совет находит отклик в сердцах близких! С юбилеем, мама!',
        image: 'https://sun9-73.userapi.com/s/v1/ig2/HsGlXW-cyfuCKtivocQmrGj5hZq-youwc4Oz59pF0kSfs-r4P7PUwgQwGX62s569-csOl4DULZsBBhWFJ7nw52-S.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=1yqvbloZuLEww0Hcoc9o3nMVEtE3Xu57HiSMdqtnmIY&cs=1080x0'
    },
    {
        id: 'smile',
        title: 'Улыбка, которая лечит',
        text: 'Одна твоя улыбка могла превратить плохой день в хороший — я замечала, как меняется атмосфера, когда ты заходишь в комнату. Даже в самые сложные времена ты находила повод для радости и заражала этим настроением всех вокруг. Твоя способность видеть хорошее научила меня оптимизму.',
        story: 'Пусть теперь твоя жизнь будет наполнена улыбками в ответ, смехом близких и моментами, которые заставят твоё сердце петь! Люблю тебя безмерно, мама!',
        image: 'https://sun9-36.userapi.com/s/v1/ig2/vUR1YteO2BDqrudEOvxLmxLfCS0aFPcPC0pn76B1I7bEtuDTFnGkfRQuwEYWDUqjq6sU5aC0yzPlQKmNn_g71DdG.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&u=hbRXMq9pSVdLjtXXYX_9204uV3uol45KwNtSjXNMEZY&cs=1280x0'
    }
];

// Создаём созвездия вертикально
function createVerticalConstellations() {
    const container = document.getElementById('constellationsContainer');

    container.innerHTML = ''; // Очищаем контейнер


    constellationsData.forEach((data, index) => {
        // Создаём секцию для созвездия
        const section = document.createElement('div');
        section.className = 'constellation-section';
        section.id = `constellation-${data.id}`;


        // Создаём контейнер созвездия
        const constellation = document.createElement('div');
        constellation.className = 'constellation';

        // Создаём звёзды созвездия (3–5 звёзд на созвездие)
        const starCount = 3 + Math.floor(Math.random() * 3); // 3–5 звёзд


        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = i === 0 ? 'star memory' : 'star'; // Первая звезда — «воспоминание»

            // Случайное позиционирование внутри созвездия
            const x = Math.random() * 100; // % от ширины контейнера
            const y = Math.random() * 100; // % от высоты контейнера

            star.style.left = `${x}%`;
            star.style.top = `${y}%`;

            if (i === 0) {
                // Добавляем обработчик клика только для главной звезды
                star.addEventListener('click', () => showStory(data));
                star.title = data.title; // Подсказка с названием
            }

            constellation.appendChild(star);
        }

        // Создаём текст истории
        const textDiv = document.createElement('div');
        textDiv.className = 'constellation-text';
        textDiv.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.text}</p>
        `;

        section.appendChild(constellation);
        section.appendChild(textDiv);
        container.appendChild(section);
    });
}

// Показываем историю в модальном окне
function showStory(data) {
    document.getElementById('story-title').textContent = data.title;
    document.getElementById('story-text').textContent = data.story;

    const imgElement = document.getElementById('story-image');
    imgElement.src = data.image;
    imgElement.alt = data.title;

    // Обработчик ошибки загрузки изображения
    imgElement.onerror = function() {
        console.warn(`Не удалось загрузить изображение: ${data.image}`);
        imgElement.style.display = 'none';
        // Показываем сообщение об отсутствии фото
        const noImageMsg = document.createElement('div');
        noImageMsg.className = 'no-image-message';
        noImageMsg.textContent = 'Фото пока недоступно';
        noImageMsg.style.color = '#aaa';
        noImageMsg.style.fontSize = '0.9em';
        document.querySelector('.modal-content').appendChild(noImageMsg);
    };

    imgElement.onload = function() {
        imgElement.style.display = 'block';
        // Удаляем сообщение об ошибке, если оно было
        const errorMsg = document.querySelector('.no-image-message');
        if (errorMsg) errorMsg.remove();
    };

    document.getElementById('modal').style.display = 'flex';

    vibrateOnMobile();
    if (getDeviceType() === 'mobile') {
        document.getElementById('modal').scrollTop = 0;
    }
}

// Закрываем модальное окно
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Обработчик закрытия модального окна при клике вне его области
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Анимация появления созвездий при прокрутке
function handleScrollAnimations() {
    const sections = document.querySelectorAll('.constellation-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Плавная прокрутка к элементам
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// Инициализация при загрузке страницы
window.onload = function() {
    createVerticalConstellations(); // Создаём созвездия

    handleScrollAnimations(); // Запускаем анимации при прокрутке

    // Добавляем плавную прокрутку при клике на звезду (если нужно)
    document.querySelectorAll('.star.memory').forEach(star => {
        star.addEventListener('click', (e) => {
            // Не скроллим, если уже открыта история
            if (document.getElementById('modal').style.display !== 'flex') {
                const section = e.target.closest('.constellation-section');
                smoothScrollTo(section);
            }
        });
    });
};

// Адаптация под мобильные устройства
function checkMobile() {
    return window.innerWidth <= 768;
}

// Перезапуск анимаций при изменении размера окна
window.addEventListener('resize', () => {
    if (checkMobile()) {
        document.querySelectorAll('.star.memory').forEach(star => {
            star.style.width = '4px';
            star.style.height = '4px';
        });
    } else {
        document.querySelectorAll('.star.memory').forEach(star => {
            star.style.width = '6px';
            star.style.height = '6px';
        });
    }

    // Функция определения типа устройства
function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad/.test(userAgent)) {
        return 'mobile';
    } else {
        return 'desktop';
    }
}

// Оптимизация создания созвездий для мобильных
function createVerticalConstellations() {
    const container = document.getElementById('constellationsContainer');
    container.innerHTML = '';

    const deviceType = getDeviceType();
    const isMobile = deviceType === 'mobile';

    constellationsData.forEach((data, index) => {
        // Создаём секцию для созвездия
        const section = document.createElement('div');
        section.className = 'constellation-section';
        section.id = `constellation-${data.id}`;

        // Создаём контейнер созвездия
        const constellation = document.createElement('div');
        constellation.className = 'constellation';

        // Определяем количество звёзд в зависимости от устройства
        const starCount = isMobile ? 3 : 3 + Math.floor(Math.random() * 3);

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = i === 0 ? 'star memory' : 'star';

            // Позиционирование звёзд
            let x, y;
            if (isMobile) {
                // Более упорядоченное расположение на мобильных
                x = (i * 25) + 25; // Равномерное распределение по горизонтали
                y = 50; // Все звёзды на одной линии
            } else {
                x = Math.random() * 100;
                y = Math.random() * 100;
            }

            star.style.left = `${x}%`;
            star.style.top = `${y}%`;

            if (i === 0) {
                star.addEventListener('click', () => showStory(data));
                star.title = data.title;
            }

            constellation.appendChild(star);
        }

        // Создаём текст истории
        const textDiv = document.createElement('div');
        textDiv.className = 'constellation-text';
        textDiv.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.text}</p>
        `;

        section.appendChild(constellation);
        section.appendChild(textDiv);
        container.appendChild(section);
    });

    // Применяем мобильную оптимизацию
    applyMobileOptimizations(isMobile);
}

// Функция применения оптимизаций для мобильных
function applyMobileOptimizations(isMobile) {
    if (isMobile) {
        document.querySelectorAll('.star.memory').forEach(star => {
            star.style.boxShadow = 'none';
        });

        // Всегда показываем текст на мобильных (без hover)
        document.querySelectorAll('.constellation-text').forEach(text => {
            text.style.opacity = '1';
        });
    }
}

// Обновлённая функция показа истории с мобильной оптимизацией
function showStory(data) {
    document.getElementById('story-title').textContent = data.title;
    document.getElementById('story-text').textContent = data.story;
    document.getElementById('story-image').src = data.image;
    document.getElementById('story-image').alt = data.title;

    if (!data.image || data.image === '') {
        document.getElementById('story-image').style.display = 'none';
    } else {
        document.getElementById('story-image').style.display = 'block';
    }

    document.getElementById('modal').style.display = 'flex';

    // Прокрутка к верху модального окна на мобильных
    if (getDeviceType() === 'mobile') {
        document.getElementById('modal').scrollTop = 0;
    }
}

// Инициализация с учётом мобильных устройств
window.onload = function() {
    createVerticalConstellations();
    handleScrollAnimations();

    // Добавляем обработчики для мобильных устройств
    setupMobileHandlers();
};

// Настройка обработчиков для мобильных устройств
function setupMobileHandlers() {
    // Обработчик для закрытия модального окна касанием
    document.addEventListener('touchstart', function(event) {
        const modal = document.getElementById('modal');
        if (modal.style.display === 'flex' && !modal.contains(event.target)) {
            modal.style.display = 'none';
        }
    });

    // Улучшенная обработка кликов на мобильных
    document.querySelectorAll('.star.memory').forEach(star => {
        star.addEventListener('touchstart', (e) => {
            // Предотвращаем случайное прокручивание при долгом нажатии
            e.preventDefault();

            // Выделяем звезду при касании
            star.style.transform = 'scale(1.4)';

            // Возвращаем размер через 150 мс
            setTimeout(() => {
                star.style.transform = '';
            }, 150);

            // Показываем историю
            const constellationSection = star.closest('.constellation-section');
            const dataId = constellationSection.id.replace('constellation-', '');
            const data = constellationsData.find(item => item.id === dataId);
            if (data) {
                showStory(data);
            }
        });
    });

    // Добавляем жесты для навигации между созвездиями на мобильных
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', e => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    });
}

// Обработка свайпов для навигации
function handleSwipe() {
    const swipeThreshold = 50; // Минимальная дистанция свайпа в пикселях
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > swipeThreshold) {
        const sections = document.querySelectorAll('.constellation-section');
        const currentIndex = Array.from(sections).findIndex(section =>
            section.getBoundingClientRect().top >= 0 &&
            section.getBoundingClientRect().top <= window.innerHeight / 2
        );

        let targetIndex;
        if (diff > 0) {
            // Свайп вверх — следующее созвездие
            targetIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
            // Свайп вниз — предыдущее созвездие
            targetIndex = Math.max(currentIndex - 1, 0);
        }

        if (targetIndex !== currentIndex) {
            smoothScrollTo(sections[targetIndex]);
        }
    }
}

// Улучшенная функция плавной прокрутки для мобильных
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // На мобильных добавляем небольшую задержку для лучшего UX
    if (getDeviceType() === 'mobile') {
        setTimeout(() => {
            window.scrollTo({
                top: window.pageYOffset - 20, // Небольшой отступ сверху
                behavior: 'auto'
            });
        }, 300);
    }
}

// Функция для добавления тактильной обратной связи (вибрация)
function vibrateOnMobile(duration = 10) {
    if ('vibrate' in navigator) {
        navigator.vibrate(duration);
    }
}

// Обновлённая функция показа истории с мобильной оптимизацией
function showStory(data) {
    document.getElementById('story-title').textContent = data.title;
    document.getElementById('story-text').textContent = data.story;
    document.getElementById('story-image').src = data.image;
    document.getElementById('story-image').alt = data.title;

    if (!data.image || data.image === '') {
        document.getElementById('story-image').style.display = 'none';
    } else {
        document.getElementById('story-image').style.display = 'block';
    }

    document.getElementById('modal').style.display = 'flex';

    // Тактильная обратная связь на мобильных
    vibrateOnMobile();

    // Прокрутка к верху модального окна на мобильных
    if (getDeviceType() === 'mobile') {
        document.getElementById('modal').scrollTop = 0;
    }
}

// Оптимизация производительности для слабых мобильных устройств
function optimizeForLowPerformanceDevices() {
    const isLowPerf = navigator.deviceMemory && navigator.deviceMemory < 2; // Менее 2 ГБ ОЗУ

    if (isLowPerf) {
        // Отключаем сложные анимации
        document.body.style.setProperty('--animation-duration', '0s');

        // Упрощаем стили
        document.querySelectorAll('.star.memory').forEach(star => {
            star.style.boxShadow = 'none';
            star.style.animation = 'none';
        });

        // Всегда показываем текст (без hover)
        document.querySelectorAll('.constellation-text').forEach(text => {
            text.style.opacity = '1';
        });
    }
}

// Инициализация с учётом мобильных устройств и производительности
window.onload = function() {
    createVerticalConstellations();
    handleScrollAnimations();
    setupMobileHandlers();
    optimizeForLowPerformanceDevices();

    // Добавляем мета-тег viewport, если его нет
    if (!document.querySelector('meta[name="viewport"]')) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(meta);
    }
};

// Обработчик изменения ориентации экрана
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        location.reload(); // Перезагружаем для корректного отображения при смене ориентации
    }, 500);
});

// Обработчик изменения размера окна
window.addEventListener('resize', () => {
    applyMobileOptimizations(getDeviceType() === 'mobile');
});

});
