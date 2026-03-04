import gitIcon from "../../assets/icons/Git.svg"


export const Header = () => {
    return (
        <header>
            <a href=''>
                <img src='' alt='logo'/>
            </a>

            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href=""></a>Tech Stack</li>
                    <li><a href=""></a>Projects</li>
                    <li><a href=""></a>Contact</li>
                </ul>
            </nav>
            
            <nav>
                <ul>
                    <li><a href=""><img src={gitIcon} alt=''/></a></li>
                    <li><a href=""><img src='' alt=''/></a></li>
                    <li><a href=""><img src='' alt=''/></a></li>

                </ul>
            </nav>

        </header>
    );
};

