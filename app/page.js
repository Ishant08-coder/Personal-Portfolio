import Image from "next/image";

export default function Home() {
  return (
    <>
    <header>
        <nav>
            <div className ="left">Ishant's Portfolio</div>
            <div className="right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact me</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section className="firstSection">
            <div className="leftSection">
                <div>Hi My Name is</div> <span className="purple">Ishant</span> 
                <div>and i am a passionate</div>
                
                <span id="element"></span>
                <div className="buttons">
                    <button className="btn">Download Resume</button>
                    <button className="btn">Visit Github</button>
                </div>

            </div>
            <div className="rightSection">
                <img src="/bg.png.png" alt=""/>
            </div>
        </section>
        <hr/>

        <section className="secondSection">
            <span className="text-gray">Work Done</span>
            <h1>Work Experience</h1>
            <div className="box">
                <div className="vertical">
                    <img className="image-top" src="/html.png" alt=""/>
                    <div className="vertical-title">
                       HTML Developer (2010-2012)
                    </div>
                    <div className="vertical-desc">
                        A weather Portal display the weather details
                        of the desired city entered along with the time.
                    </div>
                </div>
                <div className="vertical">
                    <img className="image-top" src="/instagram.png" alt=""/>
                    <div className="vertical-title">
                       HTML Developer (2012-2016)
                    </div>
                    <div className="vertical-desc">
                        A weather Portal display the weather details
                        of the desired city entered along with the time.
                    </div>
                </div>
                <div className="vertical">
                    <img className="image-top" src="/facebook.png" alt=""/>
                    <div className="vertical-title">
                       HTML Developer facebook(2016-2020)
                    </div>
                    <div className="vertical-desc">
                        A weather Portal display the weather details
                        of the desired city entered along with the time.
                    </div>
                </div>
                <div className="vertical">
                    <img className="image-top" src="/youtube.png" alt=""/>
                    <div className="vertical-title">
                       Software Developer -Youtube(2020-Present)
                    </div>
                    <div className="vertical-desc">
                        A weather Portal display the weather details
                        of the desired city entered along with the time.
                    </div>
                </div>
            </div>

        </section>
    </main>
    <footer>
        <div className="footer">
            <div className="footer-first">
                <h3>Ishant's Development Portfolio</h3>
            
            </div>
            <div className="footer-second">
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
            <div className="footer-third">
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
            <div className="footer-fourth">
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </div>
        <div className="footer-rights">
           Copyright &#169; www.ishantsportfolio.com | All rights reserved

        </div>
    </footer>
    
    </>
  )
}