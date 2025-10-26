const messages = [
        "You're doing great. Even metamorphic rocks take time.",
        "Stay grounded — literally.",
        "You’ve got this, just go pebble by pebble.",
        "Your problems will erode eventually.",
        "Be patient. Even mountains started small.",
        "Schist happens. Let it go.",
        "Rock solid advice: take a nap.",
        "You're unbreakable. Unless dropped from a great height.",
        "You’re the gem in this gravel pit of life.",
        "Take things one layer at a time.",
        "Even pressure makes something beautiful eventually.",
        "Stay steady. You’ve weathered worse.",
        "You’re not stuck — you’re sedimentary for now.",
        "You don’t need to roll far to make progress.",
        "Time smooths the rough edges.",
        "Let the world erode your worries, not your spirit.",
        "Stillness is strength.",
        "It’s okay to just… exist. That’s what I do best.",
        "No need to sparkle — just being solid is enough.",
        "Feeling pressure? Some heat? That's how diamonds are made. Keep going.",
        "I've hit rock bottom before. Turns out, there's nowhere to go but up.",
        "You rock. Obviously.",
        "Hard times? That’s kind of our thing.",
        "Keep calm and don’t take shale from anyone.",
        "Don’t take things for granite — appreciate yourself.",
        "Stay grounded, even if life’s a bit rocky.",
        "It’s ok to crack sometimes — even I do.",
        "I’ve been sitting here for eons. I've seen everything. You’ll be fine.",
        "Change is natural. I literally eroded into this shape.",
        "Even rocks have bad strata days.",
        "Some days you feel small. So do pebbles.",
        "Be boulder than your fears.",
        "I’ve seen mountains rise and fall. You’ve got this.",
        "Take your time. I’ve got plenty.",
        "My emotional range is limited, but I believe in you."

    ];

    const rockJokes = [
        "Why was the geologist depressed? He had too many faults.",
        "What do you call a rock that never goes to school? A skipping stone.",
        "Did you hear about the rock’s promotion? It was a little sedimentary.",
        "Why can’t minerals ever lie? They’re always crystal clear.",
        "How do geologists like their drinks? On the rocks.",
        "What did the geode say to the rock? You crack me up!",
        "Why was the sedimentary rock so cheap? It was on shale.",
        "What did one tectonic plate say to the other? Stop pushing my boundaries!",
        "I told a rock joke once… it was a little flat.",
        "Geology puns rock — but only if you take them for granite."
      
    ];

    const rock = document.getElementById("rock");
    const message = document.getElementById("message");
    const audio = document.getElementById("ambient-sound");
    const soundToggle = document.getElementById("sound-toggle");
    const shareArea = document.getElementById("share-area");
    const shareButton = document.getElementById("share-button");
    const shareStatus = document.getElementById("share-status");

    // Click rock for random message
    rock.addEventListener('click', () => {
    // 10% chance to show a joke
    const showJoke = Math.random() < 0.1;

      if (showJoke) {
        const randomJoke = rockJokes[Math.floor(Math.random() * rockJokes.length)];
        message.textContent = randomJoke;
        message.style.color = "#916515"; // gold/yellow for jokes

        // Trigger giggle animation
        rock.classList.add('giggle');
        setTimeout(() => rock.classList.remove('giggle'), 500);

      } else {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.textContent = randomMessage;
        message.style.color = "#444"; // normal black
      }

      // Fade out the subtitle
      subtitle.style.opacity = "0";

      // Fade in the share area
      shareArea.style.display = "block";
      setTimeout(() => shareArea.classList.add("visible"), 10);

      // Little bounce effect
      rock.style.transform = "scale(1.05)";
      setTimeout(() => rock.style.transform = "scale(1)", 100);
    });

    // Share current message
    shareButton.addEventListener("click", async () => {
      const currentMessage = message.textContent || "Your Emotional Support Rock believes in you!";
      const shareData = {
        title: "Emotional Support Rock",
        text: `"${currentMessage}" — from my Emotional Support Rock `,
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
          shareStatus.textContent = "✅ Shared successfully!";
        } catch (err) {
          shareStatus.textContent = "❌ Share canceled.";
        }
      } else {
        try {
          await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
          shareStatus.textContent = "📋 Message copied to clipboard!";
        } catch (err) {
          shareStatus.textContent = "⚠️ Unable to copy.";
        }
      }

      setTimeout(() => (shareStatus.textContent = ""), 3000);
    });
