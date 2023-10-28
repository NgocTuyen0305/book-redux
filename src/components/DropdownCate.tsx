import { Button, Dropdown, MenuProps, Space, Spin } from "antd";
import { useGetCategoriesQuery } from "../redux/api/categoriesApi";
import { useAppDispatch } from "../app/hook";
import { setCategories } from "../redux/slices/paginationSlice";

const DropdownCate = () => {
  const { data } = useGetCategoriesQuery();
  const dispatch = useAppDispatch();
  // console.log("categories: ", data);

  const items: MenuProps["items"] = data?.result.map((item) => {
    return {
      key: item._id,
      label: (
        <Space onClick={() => dispatch(setCategories(item._id))}>
          {item.name}
        </Space>
      ),
    };
  });
  return (
    <div>
      <Dropdown
        menu={{ items }}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
      >
        <button className="hover:text-[#3AA6B9] duration-500 transition-colors">Thể loại</button>
      </Dropdown>
    </div>
  );
};

export default DropdownCate;
