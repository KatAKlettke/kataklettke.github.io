# Small handmade CV website
This project serves as an online CV as well as it is a playground for me to try and find solutions for common concepts. I deliberately decided against using frameworks for this, since I wanted to get the basics right before specializing in any way. I also consider this a living document that documents my way of thinking and my improvement over time.

I have learned JavaScript while working as an automation tester, but I never actually build websites with it. So this is my way to try and come up with solutions to challenges people encounter when building websites. Lots of things here will probably not conform to best practices, but I'm ok with it - in fact, after starting with trying to figure out internationalization (and coming up with a terrible attempt, feel free to check out the older commits if you're interested in seeing that 🙈) I went and ask AI to criticize my repository and give me feedback on code quality.

Currently I'm working on understanding that feedback and implementing it, once I understand a) how the better implementation works and b) if it is actually better. Spoiler alert: in most cases, it is. I find that this right now is a great way for me to learn concepts and how to actually use JavaScript in the wild, not just theoretically know how to do things. It turns out, writing JavaScript for websites feels very different than writing simple test code or small python programs. Once I merge the branch containing the first version of this readme to main, the way my website handles multilinguality should be done and ready, and I will also have worked through the feedback I received from AI on code quality and best practices in general.

So hopefully, by the time you see this, the worst ideas I had will be in past commits and I will have improved a lot from the first shaky steps here!

## Number 1: Theme Picker
The first thing I wanted to try was doing a theme picker with custom themes, and in this case I followed a tutorial, since I had no idea where to start for this. Also, don't hire me as a designer, I am not good at choosing colors for themes that work, as you can tell by the green theme v.v

## Number 2: Filtering the cards by topic
The cards on the website represent things to know about me. I don't really want to give up too much information about me, so I don't want to have the full timeline on a website, yet I still want this to be a representation of who I am and what I can do. So I decided to add cards with bullet points that have a short explanation when you flip them over.

I also realized that there's more things about me than what you can display in a reasonable way on a website without it becoming too much for a reader. Since I wanted this to be more than just a page about my work me, I had to find a solution to make things more accessible. I ended up grouping them into Skills, Strengths, Interests and Projects.

### Skills
Skills are things I have learned, that are actually applicable to certain areas. Programming languages or human languages fall into this category for me, but also testing as a whole, since it requires you too look at things from a certain perspective and it benefits from conscious, critical thinking that you can train and refine by experience.

### Strengths
Strengths are things that you can't really specifically learn as in "here's a class that teaches you X". In my case, some of my strengths come from me being autistic and having a certain way my brain is wired - conditional hyperfocus and pattern recognition pretty much came for free with the package

### Projects
Projects are things I have worked on, often started on a whim because a certain issue annoyed me or I wanted to try out how I could solve this, like this website.

### Interests
Interests on this list are another uniquely autistic thing: most autists have special interests, things that once they catch fire for it consumes an unreasonable amount of time and brainpower, sometimes to the detriment of other parts of life, like partners. How they manifest, if they burn out or change, is individual to each autist. I found that for me, they are like currents that ebb and flow. All of the things in this category are inherently interesting to me, but there's no telling which one I'm obsessed with at a certain point in time.

## Number 3: Randomizing the displayed cards
The cards in the source file are pretty much added in the order they came to mind, not necessarily in any useful or logical order. Instead of trying to guess what would benefit the reader and in light of the possibility to filter by topic, I decided to try and add some randomization to displaying them. This way part trying to avoid classifying things as more important than others (because what criteria do you even use for this?) and part simply playfulness - a mood of "I wonder if I can achieve this". I'm not sure if using a grid and assinging positions randomly via JavaScript is the best function, especially with regards to responsive design, so maybe I will have a look at this later and see if I can find another way to do things.

## Number 4: Internationalization
This is the part that I was really interested in, since I have been thinking about how to do this for a while now, but never came to a satyifying conclusion. Separate pages for each language just scream for outdated content and forgotten changes, and I really dislike it - but it was the only way I could think of. I had wondered about possibly using data-* attributes in HTML, but couldn't think of a way to make use of it with JavaScript. This is where I finally turned to AI, also because I realized I fell into a trap that I happened to fall into a lot: a small change to one thing requiring several files and parts of the code to be changed. That's just asking for trouble in my opinion, but at the same time I never really had a mentor I could have asked.

I do have experienced devs in my circle of friends, but I realized that a simple question from me often required explaining many, many things as context and it wasn't always feasible to spend so much energy just to get on the same page where I could ask my question. They didn't always have the time or energy to really look at my repo and I wasn't very good at knowing what the important bits and pieces were to help them understand my question. While I was trying to avoid AI in order to actually learn how to code myself, I'm now using it as a mentor. I don't copy the code, instead I read it and try to understand it, then amend my own handwritten code. This way, I hope to actually learn and understand what I'm producing here.

## Further ideas
There's more ideas that I want to implement once I get my code in a shape that feels somewhat less clunky and difficult to maintain. Here are, in no particular order, my ideas of things that I could/want to implement/dive deeper into:

### Modals to explain cards
It's hard to put yourself into bullet points. It's even harder to find a **short** explanation that fits on the back of a card! Especially for my special interests, where i could probably talk your ear off if you made the mistake of hinting at possible interest in hearing something about it. So I want to add modals that show up when you click on the back of a card, where I can add some longer text to add my thoughts.

### Accessibility
I also want to explore accessibility more. It's a complex topic, but I think it's important to enable for example blind people to use the web just like anybody else. Especially since I'm working as a tester I think I should be aware of what to look out for.

### My own blog
More and more I'm starting to think about possibly just writing what goes through my mind that often doesn't really fit into causal conversation. I'm not sure how I would approach this - try my hand on my own blog software? Simply using a static site generator and linking to it? Maybe just using Medium? Many open questions, but definitely something I want to explore more.

This might also be a good place to move large parts of this readme, since I'm not sure people will read this long text here on github. I could also use this to talk about my choices so far and my thought process of why choosing this over that.