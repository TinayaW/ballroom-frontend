import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export interface ISidebarItem{
  label: string
  icon: OverridableComponent<SvgIconTypeMap>
  url: string
  id: number
  parent: string
  subSections: Array<string>
}

export type TRole = "contestant" | "admin"


export interface IAppState {
    auth : {
      status : "active" | "inactive";
      accessToken? : string;
      userID? : string;
      userRole? : TRole
    },
    page : {
      section? : string,
      subsection? : string,
      selectedItem? : string,
      redirectURL : {
        contestant : string,
        admin : string
      },
    }
}

export interface IContest {
  contestId : string,
  title : string,
  startTime : IDateTimeObject,
  endTime : IDateTimeObject,
  contestImageURL : string,
  problemFiles : string,
  forcedState : string,
  challenges : Array<string>
}

export interface IChallenge {
  challengeId : string,
  title : string,
  description : string,
  constraints : string,
  difficulty : string;
  template : Array<number>;
  testCase : Array<number>
}

export type Challenge = {
  title: string;
  difficulty: string;
};

export type BalDateTime = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export type NewContest = {
  title: string;
  description: string;
  startTime: BalDateTime;
  endTime: BalDateTime;
  moderator: string
}

export type IMinimalContest = {
  contestId: string;
  title: string;
  description: string;
  startTime: BalDateTime;
  endTime: BalDateTime;
  moderator: string;
}

export type User = {
  userId: string;
  username: string;
  fullname: string;
  role: string;
}

export type IUpdatedContest = {
  title: string;
  startTime: BalDateTime;
  endTime: BalDateTime;
  moderator: string;
}

export interface IDateTimeObject {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}
