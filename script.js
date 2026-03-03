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

// UPDATED: Added your specific projects with Repo and Live links
const projects = [
    { 
        title: 'Innovent 2026', 
        desc: 'Futuristic event landing page featuring liquid glassmorphism and custom audio synthesis.', 
        tag: 'HTML + Tailwind + JS',
        live: 'https://sujalsevak.github.io/FSWD-TASK-2/',
        repo: 'https://github.com/sujalsevak/FSWD-TASK-2'
    },
    { 
        title: 'Personal Portfolio', 
        desc: 'A professional developer space showcasing MERN stack proficiency and scalable design.', 
        tag: 'JS + Tailwind CSS',
        live: 'https://sujalsevak.github.io/FSWD-TASK-1/',
        repo: 'https://github.com/sujalsevak/FSWD-TASK-1' 
    }
];

// 3. Render Skills
const skillGrid = document.getElementById('skills-grid');
if(skillGrid) {
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
}

// 4. Render Projects (UPDATED with clickable buttons)
const projectGrid = document.getElementById('projects-grid');
if(projectGrid) {
    projects.forEach(p => {
        projectGrid.innerHTML += `
            <div class="group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/10 reveal">
                <div class="h-64 bg-slate-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-slate-700 font-bold">
                    [Project Preview]
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
                    <span class="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">${p.tag}</span>
                    <h3 class="text-2xl font-bold text-white mb-2">${p.title}</h3>
                    <p class="text-slate-300 text-sm mb-6">${p.desc}</p>
                    
                    <div class="flex gap-4">
                        <a href="${p.live}" target="_blank" class="px-5 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl hover:bg-indigo-500 transition-all">Live Demo</a>
                        <a href="${p.repo}" target="_blank" class="px-5 py-2 bg-white/10 text-white text-xs font-bold rounded-xl border border-white/10 hover:bg-white/20 transition-all flex items-center gap-2">
                             GitHub
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}

// 5. Scroll Reveal Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 6. Contact Modal Logic
function toggleModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.toggle('hidden');
}

// 7. Form Simulation
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
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
}