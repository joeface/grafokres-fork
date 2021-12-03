import grafokres from './charts';

console.log('Init Library')

const data_fertility_rate = [{ 'value': 2.52, 'year': 1960 }, { 'value': 2.45, 'year': 1961 }, { 'value': 2.36, 'year': 1962 }, { 'value': 2.27, 'year': 1963 }, { 'value': 2.18, 'year': 1964 }, { 'value': 2.13, 'year': 1965 }, { 'value': 2.1, 'year': 1966 }, { 'value': 2.04, 'year': 1967 }, { 'value': 1.99, 'year': 1968 }, { 'value': 1.97, 'year': 1969 }, { 'value': 1.99, 'year': 1970 }, { 'value': 2.03, 'year': 1971 }, { 'value': 2.04, 'year': 1972 }, { 'value': 2.01, 'year': 1973 }, { 'value': 2.0, 'year': 1974 }, { 'value': 1.98, 'year': 1975 }, { 'value': 1.97, 'year': 1976 }, { 'value': 1.95, 'year': 1977 }, { 'value': 1.92, 'year': 1978 }, { 'value': 1.9, 'year': 1979 }, { 'value': 1.89, 'year': 1980 }, { 'value': 1.91, 'year': 1981 }, { 'value': 2.04, 'year': 1982 }, { 'value': 2.11, 'year': 1983 }, { 'value': 2.06, 'year': 1984 }, { 'value': 2.05, 'year': 1985 }, { 'value': 2.15, 'year': 1986 }, { 'value': 2.22, 'year': 1987 }, { 'value': 2.12, 'year': 1988 }, { 'value': 2.01, 'year': 1989 }, { 'value': 1.89, 'year': 1990 }, { 'value': 1.73, 'year': 1991 }, { 'value': 1.55, 'year': 1992 }, { 'value': 1.39, 'year': 1993 }, { 'value': 1.4, 'year': 1994 }, { 'value': 1.34, 'year': 1995 }, { 'value': 1.27, 'year': 1996 }, { 'value': 1.22, 'year': 1997 }, { 'value': 1.23, 'year': 1998 }, { 'value': 1.16, 'year': 1999 }, { 'value': 1.2, 'year': 2000 }, { 'value': 1.22, 'year': 2001 }, { 'value': 1.29, 'year': 2002 }, { 'value': 1.32, 'year': 2003 }, { 'value': 1.34, 'year': 2004 }, { 'value': 1.29, 'year': 2005 }, { 'value': 1.31, 'year': 2006 }, { 'value': 1.42, 'year': 2007 }, { 'value': 1.5, 'year': 2008 }, { 'value': 1.54, 'year': 2009 }, { 'value': 1.57, 'year': 2010 }, { 'value': 1.58, 'year': 2011 }, { 'value': 1.69, 'year': 2012 }, { 'value': 1.71, 'year': 2013 }, { 'value': 1.75, 'year': 2014 }, { 'value': 1.78, 'year': 2015 }, { 'value': 1.76, 'year': 2016 }, { 'value': 1.62, 'year': 2017 }, { 'value': 1.58, 'year': 2018 }, { 'value': 1.5, 'year': 2019 }];

const data_life_expectancy = [{ 'value': 66.1, 'year': 1960 }, { 'value': 66.6, 'year': 1961 }, { 'value': 67.0, 'year': 1962 }, { 'value': 67.3, 'year': 1963 }, { 'value': 67.6, 'year': 1964 }, { 'value': 67.7, 'year': 1965 }, { 'value': 67.8, 'year': 1966 }, { 'value': 67.9, 'year': 1967 }, { 'value': 67.9, 'year': 1968 }, { 'value': 67.9, 'year': 1969 }, { 'value': 68.1, 'year': 1970 }, { 'value': 68.4, 'year': 1971 }, { 'value': 68.3, 'year': 1972 }, { 'value': 68.3, 'year': 1973 }, { 'value': 68.3, 'year': 1974 }, { 'value': 67.7, 'year': 1975 }, { 'value': 67.5, 'year': 1976 }, { 'value': 67.4, 'year': 1977 }, { 'value': 67.4, 'year': 1978 }, { 'value': 67.1, 'year': 1979 }, { 'value': 67.0, 'year': 1980 }, { 'value': 67.3, 'year': 1981 }, { 'value': 67.8, 'year': 1982 }, { 'value': 67.7, 'year': 1983 }, { 'value': 67.2, 'year': 1984 }, { 'value': 67.9, 'year': 1985 }, { 'value': 69.4, 'year': 1986 }, { 'value': 69.4, 'year': 1987 }, { 'value': 69.5, 'year': 1988 }, { 'value': 69.2, 'year': 1989 }, { 'value': 68.9, 'year': 1990 }, { 'value': 68.5, 'year': 1991 }, { 'value': 66.9, 'year': 1992 }, { 'value': 64.9, 'year': 1993 }, { 'value': 64.5, 'year': 1994 }, { 'value': 64.7, 'year': 1995 }, { 'value': 65.9, 'year': 1996 }, { 'value': 66.7, 'year': 1997 }, { 'value': 67.0, 'year': 1998 }, { 'value': 66.0, 'year': 1999 }, { 'value': 65.5, 'year': 2000 }, { 'value': 65.4, 'year': 2001 }, { 'value': 65.1, 'year': 2002 }, { 'value': 65.0, 'year': 2003 }, { 'value': 65.5, 'year': 2004 }, { 'value': 65.5, 'year': 2005 }, { 'value': 66.7, 'year': 2006 }, { 'value': 67.6, 'year': 2007 }, { 'value': 67.9, 'year': 2008 }, { 'value': 68.7, 'year': 2009 }, { 'value': 68.8, 'year': 2010 }, { 'value': 69.7, 'year': 2011 }, { 'value': 70.1, 'year': 2012 }, { 'value': 70.6, 'year': 2013 }, { 'value': 70.7, 'year': 2014 }, { 'value': 71.2, 'year': 2015 }, { 'value': 71.7, 'year': 2016 }, { 'value': 72.5, 'year': 2017 }, { 'value': 72.7, 'year': 2018 }, { 'value': 73.1, 'year': 2019 }, { 'value': 71.5, 'year': 2020 }];


const data_marriages = [{ 'value': 12.5, 'year': 1960 }, { 'value': 11.3, 'year': 1965 }, { 'value': 10.1, 'year': 1970 }, { 'value': 10.35, 'year': 1975 }, { 'value': 10.6, 'year': 1980 }, { 'value': 9.75, 'year': 1985 }, { 'value': 8.9, 'year': 1990 }, { 'value': 7.3, 'year': 1995 }, { 'value': 6.2, 'year': 2000 }, { 'value': 7.4, 'year': 2005 }, { 'value': 8.5, 'year': 2010 }, { 'value': 7.9, 'year': 2015 }, { 'value': 5.3, 'year': 2020 }];

const data_divorces = [{ 'value': 1.5, 'year': 1960 }, { 'value': 2.25, 'year': 1965 }, { 'value': 3.0, 'year': 1970 }, { 'value': 3.6, 'year': 1975 }, { 'value': 4.2, 'year': 1980 }, { 'value': 4.0, 'year': 1985 }, { 'value': 3.8, 'year': 1990 }, { 'value': 4.5, 'year': 1995 }, { 'value': 4.3, 'year': 2000 }, { 'value': 4.2, 'year': 2005 }, { 'value': 4.5, 'year': 2010 }, { 'value': 4.2, 'year': 2015 }, { 'value': 3.9, 'year': 2020 }];

const data_urban_population = [{ 'value': 53.7, 'year': 1960 }, { 'value': 54.6, 'year': 1961 }, { 'value': 55.5, 'year': 1962 }, { 'value': 56.4, 'year': 1963 }, { 'value': 57.3, 'year': 1964 }, { 'value': 58.2, 'year': 1965 }, { 'value': 59.0, 'year': 1966 }, { 'value': 59.9, 'year': 1967 }, { 'value': 60.8, 'year': 1968 }, { 'value': 61.6, 'year': 1969 }, { 'value': 62.5, 'year': 1970 }, { 'value': 63.3, 'year': 1971 }, { 'value': 64.1, 'year': 1972 }, { 'value': 64.9, 'year': 1973 }, { 'value': 65.7, 'year': 1974 }, { 'value': 66.4, 'year': 1975 }, { 'value': 67.2, 'year': 1976 }, { 'value': 68.0, 'year': 1977 }, { 'value': 68.7, 'year': 1978 }, { 'value': 69.3, 'year': 1979 }, { 'value': 69.8, 'year': 1980 }, { 'value': 70.2, 'year': 1981 }, { 'value': 70.6, 'year': 1982 }, { 'value': 71.1, 'year': 1983 }, { 'value': 71.5, 'year': 1984 }, { 'value': 71.9, 'year': 1985 }, { 'value': 72.3, 'year': 1986 }, { 'value': 72.8, 'year': 1987 }, { 'value': 73.2, 'year': 1988 }, { 'value': 73.4, 'year': 1989 }, { 'value': 73.4, 'year': 1990 }, { 'value': 73.4, 'year': 1991 }, { 'value': 73.4, 'year': 1992 }, { 'value': 73.4, 'year': 1993 }, { 'value': 73.4, 'year': 1994 }, { 'value': 73.4, 'year': 1995 }, { 'value': 73.4, 'year': 1996 }, { 'value': 73.4, 'year': 1997 }, { 'value': 73.4, 'year': 1998 }, { 'value': 73.4, 'year': 1999 }, { 'value': 73.4, 'year': 2000 }, { 'value': 73.3, 'year': 2001 }, { 'value': 73.3, 'year': 2002 }, { 'value': 73.4, 'year': 2003 }, { 'value': 73.4, 'year': 2004 }, { 'value': 73.5, 'year': 2005 }, { 'value': 73.5, 'year': 2006 }, { 'value': 73.6, 'year': 2007 }, { 'value': 73.6, 'year': 2008 }, { 'value': 73.6, 'year': 2009 }, { 'value': 73.7, 'year': 2010 }, { 'value': 73.7, 'year': 2011 }, { 'value': 73.8, 'year': 2012 }, { 'value': 73.9, 'year': 2013 }, { 'value': 74.0, 'year': 2014 }, { 'value': 74.1, 'year': 2015 }, { 'value': 74.2, 'year': 2016 }, { 'value': 74.3, 'year': 2017 }, { 'value': 74.4, 'year': 2018 }, { 'value': 74.6, 'year': 2019 }, { 'value': 74.8, 'year': 2020 }];

const data_mobile_subscriptions = [{ 'value': 0.0, 'year': 1975 }, { 'value': 0.0, 'year': 1976 }, { 'value': 0.0, 'year': 1977 }, { 'value': 0.0, 'year': 1978 }, { 'value': 0.0, 'year': 1979 }, { 'value': 0.0, 'year': 1980 }, { 'value': 0.0, 'year': 1981 }, { 'value': 0.0, 'year': 1982 }, { 'value': 0.0, 'year': 1983 }, { 'value': 0.0, 'year': 1984 }, { 'value': 0.0, 'year': 1985 }, { 'value': 0.0, 'year': 1986 }, { 'value': 0.0, 'year': 1987 }, { 'value': 0.0, 'year': 1988 }, { 'value': 0.0, 'year': 1989 }, { 'value': 0.0, 'year': 1990 }, { 'value': 0.0, 'year': 1991 }, { 'value': 0.0, 'year': 1992 }, { 'value': 0.01, 'year': 1993 }, { 'value': 0.02, 'year': 1994 }, { 'value': 0.1, 'year': 1995 }, { 'value': 0.15, 'year': 1996 }, { 'value': 0.33, 'year': 1997 }, { 'value': 0.51, 'year': 1998 }, { 'value': 0.93, 'year': 1999 }, { 'value': 2.23, 'year': 2000 }, { 'value': 5.31, 'year': 2001 }, { 'value': 12.13, 'year': 2002 }, { 'value': 24.99, 'year': 2003 }, { 'value': 51.17, 'year': 2004 }, { 'value': 83.52, 'year': 2005 }, { 'value': 105.07, 'year': 2006 }, { 'value': 119.5, 'year': 2007 }, { 'value': 139.28, 'year': 2008 }, { 'value': 160.51, 'year': 2009 }, { 'value': 165.66, 'year': 2010 }, { 'value': 141.79, 'year': 2011 }, { 'value': 144.5, 'year': 2012 }, { 'value': 151.26, 'year': 2013 }, { 'value': 152.79, 'year': 2014 }, { 'value': 156.77, 'year': 2015 }, { 'value': 157.72, 'year': 2016 }, { 'value': 156.19, 'year': 2017 }, { 'value': 157.43, 'year': 2018 }, { 'value': 164.39, 'year': 2019 }];

const data_fixed_subscriptions = [{ 'value': 4.41, 'year': 1975 }, { 'value': 4.83, 'year': 1976 }, { 'value': 5.69, 'year': 1977 }, { 'value': 6.16, 'year': 1978 }, { 'value': 6.71, 'year': 1979 }, { 'value': 7.03, 'year': 1980 }, { 'value': 7.94, 'year': 1981 }, { 'value': 8.45, 'year': 1982 }, { 'value': 9.0, 'year': 1983 }, { 'value': 9.59, 'year': 1984 }, { 'value': 10.21, 'year': 1985 }, { 'value': 10.88, 'year': 1986 }, { 'value': 11.58, 'year': 1987 }, { 'value': 12.33, 'year': 1988 }, { 'value': 13.14, 'year': 1989 }, { 'value': 14.03, 'year': 1990 }, { 'value': 15.07, 'year': 1991 }, { 'value': 15.41, 'year': 1992 }, { 'value': 15.82, 'year': 1993 }, { 'value': 16.24, 'year': 1994 }, { 'value': 16.9, 'year': 1995 }, { 'value': 17.51, 'year': 1996 }, { 'value': 19.12, 'year': 1997 }, { 'value': 19.85, 'year': 1998 }, { 'value': 21.07, 'year': 1999 }, { 'value': 21.91, 'year': 2000 }, { 'value': 22.82, 'year': 2001 }, { 'value': 24.45, 'year': 2002 }, { 'value': 24.96, 'year': 2003 }, { 'value': 26.72, 'year': 2004 }, { 'value': 27.91, 'year': 2005 }, { 'value': 30.61, 'year': 2006 }, { 'value': 31.56, 'year': 2007 }, { 'value': 31.79, 'year': 2008 }, { 'value': 31.66, 'year': 2009 }, { 'value': 31.3, 'year': 2010 }, { 'value': 30.72, 'year': 2011 }, { 'value': 29.28, 'year': 2012 }, { 'value': 28.04, 'year': 2013 }, { 'value': 26.41, 'year': 2014 }, { 'value': 24.52, 'year': 2015 }, { 'value': 22.22, 'year': 2016 }, { 'value': 21.96, 'year': 2017 }, { 'value': 20.66, 'year': 2018 }, { 'value': 19.0, 'year': 2019 }];

const data_internet_population = [{ 'value': 0.0, 'year': 1975 }, { 'value': 0.0, 'year': 1976 }, { 'value': 0.0, 'year': 1977 }, { 'value': 0.0, 'year': 1978 }, { 'value': 0.0, 'year': 1979 }, { 'value': 0.0, 'year': 1980 }, { 'value': 0.0, 'year': 1981 }, { 'value': 0.0, 'year': 1982 }, { 'value': 0.0, 'year': 1983 }, { 'value': 0.0, 'year': 1984 }, { 'value': 0.0, 'year': 1985 }, { 'value': 0.0, 'year': 1986 }, { 'value': 0.0, 'year': 1987 }, { 'value': 0.0, 'year': 1988 }, { 'value': 0.0, 'year': 1989 }, { 'value': 0.0, 'year': 1990 }, { 'value': 0.0, 'year': 1991 }, { 'value': 0.0, 'year': 1992 }, { 'value': 0.0, 'year': 1993 }, { 'value': 0.1, 'year': 1994 }, { 'value': 0.1, 'year': 1995 }, { 'value': 0.3, 'year': 1996 }, { 'value': 0.5, 'year': 1997 }, { 'value': 0.8, 'year': 1998 }, { 'value': 1.0, 'year': 1999 }, { 'value': 2.0, 'year': 2000 }, { 'value': 2.9, 'year': 2001 }, { 'value': 4.1, 'year': 2002 }, { 'value': 8.3, 'year': 2003 }, { 'value': 12.9, 'year': 2004 }, { 'value': 15.2, 'year': 2005 }, { 'value': 18.0, 'year': 2006 }, { 'value': 24.7, 'year': 2007 }, { 'value': 26.8, 'year': 2008 }, { 'value': 29.0, 'year': 2009 }, { 'value': 43.0, 'year': 2010 }, { 'value': 49.0, 'year': 2011 }, { 'value': 63.8, 'year': 2012 }, { 'value': 68.0, 'year': 2013 }, { 'value': 70.5, 'year': 2014 }, { 'value': 70.1, 'year': 2015 }, { 'value': 73.1, 'year': 2016 }, { 'value': 76.0, 'year': 2017 }, { 'value': 80.9, 'year': 2018 }, { 'value': 82.6, 'year': 2019 }, { 'value': 85.0, 'year': 2020 }];

const data_education_population = [{ 'value': 6.5, 'year': 1970 }, { 'value': 7.8, 'year': 1975 }, { 'value': 9.4, 'year': 1980 }, { 'value': 10.9, 'year': 1985 }, { 'value': 12.2, 'year': 1990 }, { 'value': 13.8, 'year': 1995 }, { 'value': 15.9, 'year': 2000 }, { 'value': 17.7, 'year': 2005 }, { 'value': 19.6, 'year': 2010 }, { 'value': 21.0, 'year': 2015 }, { 'value': 22.0, 'year': 2020 }];


grafokres({
  elem: "#chart-life-expectancy",
  data: data_life_expectancy,
  cutoff: 1990,
  interval: "year",
  yFormat: "x",
  yMax: 80,
  yMin: 50,
  showCTA: true
});

grafokres({
  elem: "#chart-fertility-rate",
  data: data_fertility_rate,
  cutoff: 1990,
  yMax: 4,
  interval: "year",
});


grafokres({
  elem: "#chart-marriages",
  data: data_marriages,
  cutoff: 1990,
  interval: "year",
  yMax: 20,
  yFormat: "x",
});


grafokres({
  elem: "#chart-divorces",
  data: data_divorces,
  cutoff: 1990,
  interval: "year",
  yMax: 10,
  yFormat: "x",
});


grafokres({
  elem: "#chart-urban-population",
  data: data_urban_population,
  cutoff: 1990,
  interval: "year",
  yFormat: "x + '%'",
});


grafokres({
  elem: "#chart-mobile-subscriptions",
  data: data_mobile_subscriptions,
  cutoff: 1990,
  interval: "year",
  yMax: 200,
  yFormat: "x + '%'",
});


grafokres({
  elem: "#chart-fixed-subscriptions",
  data: data_fixed_subscriptions,
  cutoff: 1990,
  interval: "year",
  yFormat: "x + '%'",
});


grafokres({
  elem: "#chart-internet-population",
  data: data_internet_population,
  cutoff: 1990,
  interval: "year",
  yFormat: "x + '%'",
});


grafokres({
  elem: "#chart-education-population",
  data: data_education_population,
  cutoff: 1990,
  interval: "year",
  yFormat: "x + '%'",
});
