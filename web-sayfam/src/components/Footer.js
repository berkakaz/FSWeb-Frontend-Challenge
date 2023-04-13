export default function Footer() {
    return (
        <div
            className={
                "flex justify-center xl:w-[78.3vw] gap-[2rem] xl:gap-[5.8rem] xl:px-[14.8rem] pt-[3rem] xl:pt-[10.9rem]  "
            }
        >
            <div>
                <p
                    className={
                        "footer"
                    }
                >
                    Let's work together on
                    <span>
                        <div
                            className={
                                "xl:w-[27rem] w-[6.5rem] mt-[-.6rem] ml-[3.1rem] mb-[-1.5rem] h-[.4rem] xl:h-[1.8rem] bg-[#82BBFF] rounded-[.4rem] xl:ml-[13rem] xl:mb-[-6.1rem] xl:mt-[-2.2rem]"
                            }
                        ></div>
                    </span>{" "}
                    <br /> your next product.
                </p>
            </div>
            <div>
                <a
                    target="_blank"
                    href="https://github.com/berkakaz"
                >
                    <p
                        className={
                            "xl:text-[2.4rem] text-[#1769FF] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]"
                        }

                    >
                        Github
                    </p>
                </a>
                <p

                    className={
                        "xl:text-[2.4rem] text-[#0A0A14] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]"
                    }
                >
                    Personal Blog
                </p>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/berkakaz/"
                >
                    <p
                        className={
                            "xl:text-[2.4rem] text-[#0077B5] text-left xl:leading-[3.6rem] font-['Inter'] font-[500]"
                        }
                    >
                        LinkedIn
                    </p>
                </a>
                <a
                    target="_blank"
                    href="mailto:berk.akaz@gmail.com"
                >
                    <p
                        className={
                            "xl:text-[2.4rem] text-[#AF0C48] text-left xl:leading-[2.9rem] font-['Inter'] font-[500]"
                        }
                    >
                        Email
                    </p>
                </a>
            </div>
        </div>
        </div >
    );
}