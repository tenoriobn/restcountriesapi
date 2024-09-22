import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { BorderCountriesContainer, CountryDetails, CountryDetailsWrapper, CountryInfo, CountryInfoContainer } from '.';

export default function SkeletonCountryDetailsContainer() {
  return (
    <CountryDetailsWrapper>
      <p className="country-flag" >

        <Skeleton 
          className="country-flag" 
        />
      </p>

      <div className="country-content">
        <CountryDetails>
          <h2 className="country-title"><Skeleton /></h2>

          <CountryInfoContainer>
            <CountryInfo>
              {Array(5).fill(null).map((_, index) => (
                <p key={index}><Skeleton /></p>
              ))}
            </CountryInfo>

            <CountryInfo>
              {Array(3).fill(null).map((_, index) => (
                <p key={index}><Skeleton /></p>
              ))}
            </CountryInfo>
          </CountryInfoContainer>
        </CountryDetails>

        <BorderCountriesContainer>
          <h3 className="border-countries__subtitle"><Skeleton width={156} height={20} /></h3>

          <div className="border-countries__list">
            {Array(3).fill(null).map((_, index) => (
              <Link
                className="border-countries__list_link"
                to="#"
                key={index}
              >
                <Skeleton />
              </Link>
            ))}
          </div>
        </BorderCountriesContainer>
      </div>
    </CountryDetailsWrapper>
  );
}
