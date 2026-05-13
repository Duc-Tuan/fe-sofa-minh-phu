import { PathName } from "@/router/path";
import { Option } from "@/types/global";

export const dataLanguage: Option<string>[] = [
    {
        label: "EN",
        value: "en"
    },
    {
        label: "VN",
        value: "vn"
    },
]

export interface IMenuHeader {
    name: string,
    path: string,
}

export const dataMenu: IMenuHeader[] = [
    {
        name: "Giới thiệu",
        path: PathName.CONTACT
    },
    {
        name: "Năng lực sản xuất",
        path: PathName.MANUFACTURE
    },
    {
        name: "Dự án tiêu biểu",
        path: PathName.TYPICALPROJECT
    },
    {
        name: "Đối tác chiến lược",
        path: PathName.ABOUT
    },
    {
        name: "Sản phẩm",
        path: PathName.PRODUCT
    },
    {
        name: "Tin tức & blog",
        path: PathName.ABOUT
    },
]

export const dataSocialNetwork = [
    {
        name: "Messager",
        icon: "icon-messager",
        path: "#",
        color: ""
    },
    {
        name: "Zalo",
        icon: "icon-zalo",
        path: "#",
        color: ""
    },
    {
        name: "Phone",
        icon: "icon-phone",
        path: "#",
        color: "red"
    }
]