const Youridea = () => {
    return (
        <section className="bg-white-light py-24 border-t border-[#A202F0]/50">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* HEADING */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 tracking-tight leading-tight">
                    Your idea is ready. <br className="hidden md:block" />
                    Let’s build it.
                </h2>

                {/* PURPLE DECORATION */}
                <div className="h-1.5 w-20 bg-[#A202F0] mx-auto rounded-full mb-10 opacity-90"></div>

                {/* BODY TEXT */}
                <p className="text-lg md:text-xl text-gray-dark mb-8 leading-relaxed font-normal">
                    You’ve got a software idea you want to bring to life—but getting it built can
                    feel harder than it should. Finding great developers is tough, building the
                    right team takes time, and managing delivery without blowing your budget
                    can quickly turn into a constant headache.
                </p>

                {/* SECOND PARAGRAPH */}
                <p className="text-lg md:text-xl text-gray-dark leading-relaxed font-normal">
                    That’s where we come in. We guide you through the entire process with a
                    ready

                    {/* HIGHLIGHT */}
                    <span className="text-[#A202F0] font-semibold mx-1.5">
                        pool of experienced software talent
                    </span>,

                    covering

                    {/* HIGHLIGHT 2 */}
                    <span className="text-[#A202F0] font-semibold mx-1.5">
                        everything from design and coding to testing and deployment
                    </span>.

                    We help you move forward with clarity, confidence, and control.
                </p>

            </div>
        </section>
    );
};

export default Youridea;