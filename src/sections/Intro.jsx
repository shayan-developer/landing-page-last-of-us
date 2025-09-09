const Intro = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <img src="/images/hero2.png" className="w-full h-full object-cover" />

        <div className="flex-center bottom-12 absolute gap-10">
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
