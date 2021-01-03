import React from 'react';
import PageTemplate from "./PageTemplate";

function Home(props) {
    return (
        <PageTemplate children={
            <div>
                <h3>Welcome to my site</h3>
                <span>
                    My name is Carolyn Redlak and I am a software developer currently residing in Georgia. People will ask me why software developer and it really happened organically.
                    
                    <p>
                        I was addicted to Neopets and in particular the guilds that the community offered. Many of these
                        guilds (while yes being for little kids) had the goal of looking flashy for new members. This is how I got in to coding. I
                        quickly found entertainment in making graphics for fun and then figuring out how to use HTML to put text on top. Aside from
                        Neopets I started to make my own websites for fun.
                    </p>

                    <p>
                        I remember one time I told my dad that I was really enjoying coding. At the time I was also obsessed with Sims so I
                        aspired to be a game designer/developer. In highschool I took a Computer Science class and really enjoyed it. I knew from that
                        come senior year I would be looking solely for colleges with Computer Science programs. I was accepted to Christopher Newport University
                        and eventually graduated with the degree I had hoped for - BS in Computer Science.
                        <br />
                        <br />

                         While I am not exactly in that role, I find that a lot of what I do still counts
                        to what I would say is "fulfilling" my childhood dream. I love this job because it is always something new. I am always learning something new, and I like it! 
                    </p>
                    - Carolyn
                </span>
            </ div>
        }
        />
    );
}

export default Home;
