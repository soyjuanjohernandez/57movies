import React from "react";
import "./searchArea.scss";
import Input from "../../atoms/input/Input";
import logoHeader from '../../../assets/logo_header.svg'
import magnifying from '../../../assets/magnifying.svg'

const SearchArea = ({handleSubmit, handleChange}) => {
  return (
    <form action="" onSubmit={handleSubmit || null} className="search-area">

      <img src={magnifying} alt="" srcset="" className="search-area__glass" />
      <Input title="Find Movie" onChange={handleChange}/>
      <img src={logoHeader} alt="" srcset=""  className="search-area__logo" />
    </form>
  );
};

export default SearchArea;
