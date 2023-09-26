import React from "react";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };
  return (
    <div className="header">
      <div className="header__container container">
        {/* <div className="mobile-nav">
                    {history.location.pathname === '/recipe'
                        ?
                        <i onClick={() => history.goBack()} className="fas fa-arrow-left"></i>
                        :
                        <Link to="/" className="header__container__icon"><i className="fas fa-home"></i></Link>
                    }
                </div> */}
        {/* <Link to="/" className="home__title">
                    <h1 onClick={scrollToTop}>
                        {user.fetchSuccess
                            ?
                            user.user.name
                            :
                            'Recipeasy'
                        }
                    </h1>
                </Link> */}
        {/* <div className="menu mobile-nav">
          <Link to="/search" className="header__container__icon search">
            <i className="fas fa-search"></i>
          </Link>
          <Link href="/account" className="header__container__icon">
            <i className="fas fa-user-circle"></i>
          </Link>
        </div> */}
      </div>
    </div>
  );
};
export default Header;
