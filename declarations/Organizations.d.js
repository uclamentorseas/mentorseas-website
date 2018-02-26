// @flow
/* eslint-disable */

type OrganizationsDataImagesType = {
  regular: string,
};

type OrganizationsDataType = {
  name: string,
  abbreviation: string,
  links?: {
    [string]: string
  },
  images?: OrganizationsDataImagesType,
};
