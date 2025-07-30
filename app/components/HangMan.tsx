import React from "react";

function HangMan() {
  return (
    <section>
      <div className="wrapper">
        <div className="Execution-platform relative h-auto w-auto">
          <div className="w-48 h-2 bg-black"></div>
          <div className="w-2 h-80 bg-black absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="w-48 h-2 bg-black relative">
              <div className="w-2 h-14 bg-black absolute right-0">
                <div className="hangman absolute top-14 -left-6">
                    <div className="head w-14 h-14 border-4 border-black rounded-full">
                        <div className="body w-1.5 h-26 bg-black absolute left-1/2 -translate-x-1/2 translate-y-1/2">
                            <div className="left-hand w-1.5 h-18 bg-black absolute -left-6 rotate-45"></div>
                            <div className="right-hand w-1.5 h-18 bg-black absolute -right-6 -rotate-45"></div>
                            <div className="left-leg w-1.5 h-14 bg-black absolute -left-5 -bottom-11.5 rotate-45"></div>
                            <div className="right-leg w-1.5 h-14 bg-black absolute -right-5 -bottom-11.5 -rotate-45"></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HangMan;
