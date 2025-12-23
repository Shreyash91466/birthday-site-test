// 🛠️ DEBUG VERSION - Shows exactly what's wrong
console.log('🔧 DEBUG: Script loading...');

try {
    // Get all elements
    const cursor = document.getElementById('cursor');
    const music = document.getElementById('bg-music');
    const playBtn = document.getElementById('play-btn');
    const confettiBtn = document.getElementById('confetti-btn');
    const scrollBtn = document.getElementById('scroll-btn');
    const gallery = document.getElementById('gallery');

    console.log('DEBUG:', { cursor, music, playBtn, confettiBtn, scrollBtn, gallery });

    // 🎵 MUSIC - SIMPLIFIED
    if (playBtn && music) {
        playBtn.onclick = function () {
            console.log('🎵 Music button clicked!');
            if (music.paused) {
                music.play();
                playBtn.innerHTML = '⏸ Pause';
                playBtn.style.background = '#ff6b9d';
            } else {
                music.pause();
                playBtn.innerHTML = '▶ Play';
                playBtn.style.background = '#ff8ba7';
            }
        };
    }

    // 🎉 CONFETTI - SIMPLIFIED
    if (confettiBtn) {
        confettiBtn.onclick = function () {
            console.log('🎉 Confetti clicked!');
            fireConfetti();
        };
    }

    // 📸 SCROLL - SIMPLIFIED
    if (scrollBtn) {
        scrollBtn.onclick = function () {
            console.log('📸 Scroll clicked!');
            const memories = document.getElementById('memories');
            if (memories) {
                memories.scrollIntoView({ behavior: 'smooth' });
            }
        };
    }

    // 🌈 SUPER SIMPLE CONFETTI
    function fireConfetti() {
        console.log('🎊 Firing confetti!');
        for (let i = 0; i < 50; i++) {
            let conf = document.createElement('div');
            conf.style.cssText = `
        position:fixed;top:${Math.random() * 100}vh;left:${Math.random() * 100}vw;
        width:10px;height:10px;background:#ff69b4;
        pointer-events:none;z-index:9999;animation:fall 2s linear forwards;
      `;
            document.body.appendChild(conf);
            setTimeout(() => conf.remove(), 2000);
        }
    }

    // Make the closing section trigger confetti
    const closingSection = document.querySelector('.closing');

    if (closingSection) {
        closingSection.addEventListener('click', (e) => {
            console.log('🎂 Closing section clicked!');
            fireConfetti();
        });
    } else {
        console.log('⚠️ No .closing section found');
    }


    // Add confetti animation
    let style = document.createElement('style');
    style.textContent = '@keyframes fall{to{transform:translateY(100vh);opacity:0;}}';
    document.head.appendChild(style);

    // Tap / click to flip cards (mobile + desktop)
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });


    // Cursor
    if (cursor) {
        document.onmousemove = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };
    }

    console.log('✅ ALL BUTTONS SETUP COMPLETE!');

} catch (error) {
    console.error('❌ ERROR:', error);
}

// TEST: Click console log to see if buttons exist
console.log('🧪 TEST: Open browser console (F12) and check DEBUG messages!');
