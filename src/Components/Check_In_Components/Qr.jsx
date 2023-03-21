import React from "react";

const Qr = () => {
  var img = new Image();
  img.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf4AAAH+AQAAAABVFFGIAAAD1klEQVR4nO2dQY6jMBBFfw2RemluMEdxbjBnmpuRA7Vkli2BahZ22eWQWbVRpzufBUqAPIH0VeX6LhNRfGrbf33u9wABBBBAAAEEEEAAAQQQQMB/N1VV1aV9TQBiAnTBpAAmRUyTquoGIGx2ZVBV1e3rH4GAHwEwJRZdQTVNqgsm7T4BiLqhXOJ/8fWPQMCPAFRdlYBn0XFSxIQcHQFM+bJ2CZVIwFjA5Xho2oB1FiAocJunDcAuCuwPLn6CRyDghwLCBrmGDcAqIlfsIiJvKjJbnDz7Dgh4aYANB4FdgPVNcZunMhxcwocgpl307wwgquoR8Ok7IOClAZZwV3EH9fb7Q/T25z3nZM3H5vd8tlwZBt0BAQQAsIqlbblYbnVymtxJ827axoqFgDGArnYGsvSAoNlKLC5iNXXK1yZgKpGAMYAmqWrMuICXj5WBYXCjQ7o4BAwGdNk5AQAsJsbkdVqc7RwxN8ZEAgYDfHbuamKUMWGaFNEpEbDJPyqRgIEAN3fXHS5Tzm0AmbeoqjbvRyUSMBBgkkqt5QGwxOwnmhEtdprHSCUSMBBQlVhEWBRW828OljVi5iYdq2KoRAKGAXx2jrn5Bl1hklBzcpFj+wWVSMAwgHdxsm2DkqdtB+SuxJhrF7UmHcZEAkYCDjExWzmhdoBZJnb6yxJlTCRgJKCvWMouV8dL6CuWNLnxJGMiAWMBnZ/YeYfdHPN2WFHA1QMEnAJYL0BuCAOgy3qBLrk/TAS3uUhProDpdPQdEPDagPuY6EoUN+9X42QNlszOBIwF9F1hm8u/xVQ0Z7Fl52L0UIkEjAT4VaYxdforHvedlW1NiqydCRgKcHMsWXWl76aqs6XjBKuYE2MiAaMBXoluqX2tSXI93YxGAIyJBJwAcNnZguDDST14o5tdYQScBghqPuEqokvYIFcA2cW5224z7OwzPQIB3xpwP060bhszdZqpXUeH7E8k4ARAn53bAueWji0n1yXRrkmRSiRgFKDr2TY/uziLLTA2Z8deHUZnm4CxgPt1LFrXkbb+2K5Te2OnLAFnAJwSjy9RLH5O6551lzA7EzAU8PgdEEs+VzNxahlb1e2oRAJGAR68U7Y52210CJRRJLMzAecCqoF9mwFgfVNdsIvIvAvqotOyWy923TM9AgHfGvD4nbJR25qB9tKHOpSki0PAcMBRiRYdbUVL87hdTqazTcD5gF1K6g1b7d4G5Ipd9O+8i8h88h0Q8IKA438P9Ls67+L7uEFnm4DRgEPtnD/1wnS+tzN1qEQCBgKE/2VKAAEEEEAAAQQQQAABBDwt4B8aUHHOOCCbTwAAAABJRU5ErkJggg==";
  return (
    
    <div>
    <img src={img.src}/>

    </div>
  );
};

export default Qr;