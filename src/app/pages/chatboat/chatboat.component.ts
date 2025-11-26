import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatboat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatboat.component.html',
  styleUrls: ['./chatboat.component.css']
})
export class ChatboatComponent {
  isChatOpen = false;
  userMessage = '';
  studentClass: string | null = null; // 👈 remembers class info

  messages = [
    { sender: 'bot', text: '👋 Hello! I’m your digital classroom assistant. How can I help you today?' }
  ];

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    if (!this.isChatOpen) {
      this.messages = [
        { sender: 'bot', text: '👋 Hello! I’m your digital classroom assistant. How can I help you today?' }
      ];
      this.studentClass = null; // reset memory if closed
    }
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    const message = this.userMessage.trim();
    this.messages.push({ sender: 'user', text: message });

    const reply = this.getBotResponse(message);

    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: reply });
    }, 600);

    this.userMessage = '';
  }

  getBotResponse(message: string): string {
    const msg = message.toLowerCase();
    let botReply = "🤔 Hmm... I’m not sure about that. Try asking about class, subjects, or homework.";

    // ✅ Reset or change class
    if (msg.includes('change class') || msg.includes('reset class') || msg.includes('change my grade')) {
      this.studentClass = null;
      return "🔄 No problem! Please tell me your new class (for example: 'I’m in class 7').";
    }

    // ✅ Detect and remember class
    const classMatch = msg.match(/class (\d+)|grade (\d+)/);
    if (classMatch) {
      this.studentClass = classMatch[1] || classMatch[2];
      return `🎓 Got it! You’re in Class ${this.studentClass}. I’ll now give you answers suited to your level.`;
    }

    // ✅ Personalized by stored class
    if (this.studentClass) {
      switch (this.studentClass) {
        case '1': return "🧸 Class 1 — let’s learn numbers, alphabets, and fun rhymes!";
        case '2': return "📘 Class 2 — we can do addition, shapes, or simple words.";
        case '3': return "📗 Class 3 — want to talk about multiplication, plants, or short stories?";
        case '4': return "✏️ Class 4 — we can study fractions, grammar, or Indian states.";
        case '5': return "📚 Class 5 — how about decimals, the solar system, or great leaders?";
        case '6': return "🧠 Class 6 — let’s do integers, photosynthesis, or grammar practice!";
        case '7': return "📖 Class 7 — algebra, acids & bases, or world history?";
        case '8': return "🧮 Class 8 — equations, reproduction in plants, or English tenses?";
        case '9': return "🔬 Class 9 — atoms, motion, or literature practice?";
        case '10': return "🎓 Class 10 — trigonometry, chemical reactions, or essays. Ready?";
      }
    }

    // ✅ Subject-based
    if (msg.includes('math')) return "🧮 Math is fun! Do you want to practice geometry, algebra, or word problems?";
    if (msg.includes('science')) return "🔭 Science time! Would you like to learn about biology, physics, or chemistry?";
    if (msg.includes('english')) return "📘 English topics — grammar, vocabulary, or essay writing?";
    if (msg.includes('history')) return "🏰 History — ancient, medieval, or modern topics?";
    if (msg.includes('geography')) return "🌍 Geography helps us know our planet! Want to learn about maps or climates?";
    if (msg.includes('computer')) return "💻 Computers are cool! Want to learn coding, MS Word, or Internet basics?";
    if (msg.includes('hindi')) return "📗 Hindi time! Kya tum varnmala, sandhi, ya kavita padhna chahoge?";
    if (msg.includes('moral')) return "🌟 Moral stories teach us good values. Shall I tell you a short story?";

    // ✅ Common school-related
    if (msg.includes('homework')) return "📚 You can check your homework in the Assignments section.";
    if (msg.includes('teacher')) return "👩‍🏫 Your class teacher is Mrs. Sharma.";
    if (msg.includes('exam')) return "📝 Exams coming up? Want some study tips or revision ideas?";
    if (msg.includes('project')) return "🧠 Tell me your project topic — science, art, or social studies?";
    if (msg.includes('motivate')) return "💪 You’re doing great! Keep practicing a little every day.";

    // ✅ Casual talk
    if (msg.includes('hello') || msg.includes('hi')) return "👋 Hello there! How’s your study going today?";
    if (msg.includes('who are you')) return "🎓 I’m your Study Buddy Chatbot — here to make learning fun!";
    if (msg.includes('how are you')) return "🤖 I’m great! Excited to learn with you today.";
    if (msg.includes('thank')) return "😊 You’re welcome! Keep up the good work.";
    if (msg.includes('bye')) return "👋 Goodbye! Come back soon to learn something new.";
    if (msg.includes('fun fact')) return "🤓 Fun fact: Honey never spoils — even after 3000 years! 🍯";

    return botReply;
  }
}
