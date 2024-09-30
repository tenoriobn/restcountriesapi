import Skeleton from 'react-loading-skeleton';
import { BorderCountriesContainer, CountryDetails, CountryDetailsWrapper, CountryInfo, CountryInfoContainer } from '.';

export default function SkeletonCountryDetailsContainer() {
  return (
    <CountryDetailsWrapper>
      <p className="country-flag" style={{ borderRadius: '4px' }} >
        <Skeleton 
          style={{ height: '100%' }}
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
          <h3 className="border-countries__subtitle"><Skeleton /></h3>
          
          {Array(3).fill(null).map((_, index) => (
            <Skeleton
              style={{ width: 'max-content', minWidth: '90px', height: '28px' }}
              key={index}
              
            />
            //   <Skeleton  />
            // </Skeleton>
          ))}
        </BorderCountriesContainer>
      </div>
    </CountryDetailsWrapper>
  );
}
