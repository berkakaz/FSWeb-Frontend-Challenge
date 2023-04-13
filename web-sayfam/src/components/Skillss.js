export default function Skills() {
    return (
      <div className={" xl:w-[144rem] px-[.5rem] xl:px[0rem]  xl:h-[49rem]"}>
   
        <div
          className={
            " flex-wrap  ml-[20rem] xl:pb-[13rem] pt-[2rem] xl:pt-[3rem] xl:pr-[0rem] xl:pl-[25.9rem]"
          }
          id="header"
        >
               <span>
              <div
                className="ellipse2"
                
              ></div>
            </span>
          <p
            className={
              "text-[3rem] xl:text-[4.8rem] font-['Inter'] xl:leading-[58.09px] xl:tracking-[0.01em]"
            }
          >
            Skills
          </p>
          <div
            className={
              "flex flex-wrap font-[500] text-[#777777] text-[1.5rem] xl:text-[2.4rem] justify-between leading-[36px] "
            }
          >
            <div className={"flex-col "}>
            <a
                target="_blank"
                href="https://www.javascript.com/"
              > 
           
              
              <img
                className={"xl:pt-[5.6rem]  xl:pl-[1rem]   "}
                src={"./img/js-logo (1).png"}
                link={""}
                
              />
                </a>
              
            
              <p className={"xl:mt-[1rem] font-['Inter'] "}>
                JAVASCRIPT
              </p>
            </div>
  
            <div>
              <a 
              target="_blank"
              href="https://react.dev/"
            > 
              <img className={"xl:pt-[5.6rem] "} src={"./img/Rectangle 35.png"} /> </a>
              <p className={"xl:mt-[1rem] font-['Inter']"}>REACT</p>
            </div>
            <div>
            <a 
              target="_blank"
              href="https://redux.js.org/"
            > 
              <img
                className={"xl:pt-[5.6rem]  "}
                src={"./img/redux.png"}
                link={""}
              />
              </a>
              <p className={"xl:mt-[1rem] font-['Inter'] "}>REDUX</p>
            </div>
            <div>
              {" "}
              <a 
              target="_blank"
              href="https://nodejs.org/en"
            > 
              <img
                className={"xl:pt-[5.6rem] "}
                src={"./img/node.png"}
                link={""}
              />
              </a>
              <p className={"xl:mt-[1rem] font-['Inter'] "}>NODE</p>
            </div>
            <div>
              {" "}
              <a 
              target="_blank"
              href="https://code.visualstudio.com/"
            > 
              <img
                className={"xl:pt-[5.6rem]"}
                src={"./img/vscode.png"}
                link={""}
              />
              </a>
          
              <p className={"xl:mt-[1rem] font-['Inter'] "}>VS CODE</p>
            </div>
            <div>
            <a 
              target="_blank"
              href="https://www.figma.com/"
            > 
              <img
                className={"xl:pt-[5.6rem]"}
                src={"./img/figma.png"}
                link={""}
              />
              </a>
              <p className={"xl:mt-[1rem] font-['Inter'] "}>FIGMA</p>
            </div>
            <span>
              <div
                className="rectangle22"
                
              ></div>
            </span>
          </div>
        </div>
      </div>
    );
  }