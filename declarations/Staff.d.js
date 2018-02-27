// @flow
/* eslint-disable */

type MemberDataNameType = {
  first: string,
  last: string
};

type MemberDataImagesType = {
  regular: string,
};

type MemberDataType = {
  name: MemberDataNameType,
  position?: string,
  major?: string,
  involvement?: string,
  restaurant?: string,
  description?: string,
  links?: { [string]: string},
  images?: MemberDataImagesType,
};
