// 1. Cursor Glow Tracking
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// 2. Dynamic Data
const skills = [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'AWS Cloud', level: 75, icon: '☁️' },
    { name: 'PostgreSQL', level: 82, icon: '🐘' }
];

const projects = [
    { title: 'SaaS Dashboard', desc: 'Real-time analytics with web sockets.', tag: 'React + Firebase' },
    { title: 'Crypto Wallet', desc: 'Secure blockchain asset manager.', tag: 'Next.js + Tailwind' }
];

// 3. Render Skills
const skillGrid = document.getElementById('skills-grid');
skills.forEach(skill => {
    skillGrid.innerHTML += `
        <div class="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group reveal">
            <div class="text-4xl mb-4 group-hover:scale-110 transition-transform">${skill.icon}</div>
            <h3 class="text-xl font-bold text-white mb-4">${skill.name}</h3>
            <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div class="bg-indigo-500 h-full rounded-full transition-all duration-1000" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `;
});

// 4. Render Projects
const projectGrid = document.getElementById('projects-grid');
projects.forEach(p => {
    projectGrid.innerHTML += `
        <div class="group relative overflow-hidden rounded-3xl bg-slate-800 reveal">
            <div class="h-64 bg-slate-700 group-hover:scale-105 transition-transform duration-700"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span class="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">${p.tag}</span>
                <h3 class="text-2xl font-bold text-white mb-2">${p.title}</h3>
                <p class="text-slate-300 text-sm">${p.desc}</p>
            </div>
        </div>
    `;
});

// 5. Scroll Reveal Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 6. NEW: Contact Modal Logic
function toggleModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.toggle('hidden');
}

// 7. NEW: Form Simulation
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = "Sending...";
    btn.disabled = true;
    
    setTimeout(() => {
        alert("Thank you! Your message has been sent successfully.");
        toggleModal();
        e.target.reset();
        btn.innerText = "Submit Message";
        btn.disabled = false;
    }, 1500);
});