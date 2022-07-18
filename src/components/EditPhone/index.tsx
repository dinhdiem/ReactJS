import React, { useEffect } from "react";
import add from "../../assets/image/Icon.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { PhoneType } from "../../types/ProductType";
import { BiChevronDown } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { readPhone } from "../../api/Product";
import { CategorType } from "../../types/CategoryType";

type Props = {
  onUpdate: (data: PhoneType) => void;
  categors: CategorType[];
};

type FormInput = {
  name: string;
  originalPrice: number;
  saleOffPrice?: number;
  short_description: string;
  long_description: string;
  categorId: number;
  Highlights: string;
  img: string;
};
const EditPhone = ({ onUpdate, categors }: Props) => {
  const { id } = useParams();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const navigate = useNavigate();

  useEffect(() => {
    const getPhone = async () => {
      const { data } = await readPhone(id);
      reset(data);
    };
    getPhone();
  }, []);

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    onUpdate(data);
    navigate("/admin/phone");
  };
  return (
    <div className="mx-auto px-5 pt-8 mb-10">
      <div className="title-page">
        <h1 className="text-2xl font-poppins">Cập nhật Sản phẩm</h1>
      </div>
      <div className="flex">
        <div className="w-[375px] mr-3 mt-11">
          <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl border-b">
            <div className="md:flex">
              <div className="w-full bg-[#FFFFFF]">
                <div className="relative rounded-lg flex justify-center items-center">
                  <div className="absolute">
                    <div className="flex flex-col items-center">
                      <span className="block text-gray-400 font-normal">
                        <img src={add} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-[58%]">
                    <div className="flex flex-col items-center">
                      <span className="block text-gray-400 font-normal text-[20px]">
                        Thêm ảnh
                      </span>
                    </div>
                  </div>
                  <input
                    type="file"
                    className="h-[259px] w-full opacity-0"
                    name=""
                  />
                </div>
              </div>
            </div>
          </div>
          <form className="w-full max-w-sm bg-white">
            <div className="border-b border-[#E1E5EB] py-2">
              <label
                className="block tracking-wide text-gray-700 text-xs mb-2 ml-[9px] bg-white"
                htmlFor="grid-first-name"
              >
                Mô tả ngắn:
              </label>
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                aria-label="Full name"
              />
            </div>
          </form>
        </div>
        <div className="content-add w-full">
          <span className="w-full border-b-2 block pb-5">
            Thông tin sản phẩm
          </span>
          <form className="mt-5 mr-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label className="block text-[13px] pb-2">Tên sản phẩm</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full h-8 px-2 rounded-sm"
                placeholder="Nhập tên điện thoại"
              />
              {errors.name && (
                <span className="text-red-700 mt-1">
                  Bạn chưa điền tên sản phẩm
                </span>
              )}
            </div>
            <div className="flex w-full">
              <div className="w-[50%] mr-1">
                <label htmlFor="" className="block text-[13px] pb-2">
                  Giá gốc
                </label>
                <input
                  type="number"
                  className="px-2 w-full h-8 rounded-sm"
                  {...register("originalPrice", { required: true })}
                />
                {errors.originalPrice && (
                  <span className="text-red-700 mt-1">
                    Bạn phải điền giá sản phẩm
                  </span>
                )}
              </div>
              <div className="w-[50%] ml-1">
                <label htmlFor="" className="block text-[13px] pb-2">
                  Giá khuyến mãi
                </label>
                <input
                  type="number"
                  className="saleOffPrice px-2 w-full h-8 rounded-sm"
                  {...register("saleOffPrice")}
                />
              </div>
            </div>
            <div className="mt-5">
              <span className="pb-1 inline-block">Danh mục sản phẩm</span>
              <br />
              <div className="inline-block relative w-[437px]">
                <select
                  {...register("categorId")}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  {categors?.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {errors.categorId && <span>Ban k duoc de trong</span>}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <BiChevronDown />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <span className="block mb-1">Đặc điểm nổi bật</span>
              <textarea
                className="w-full h-[121px] p-2"
                {...register("Highlights", { required: true })}
              ></textarea>
              {errors.Highlights && (
                <span className="text-red-700 mt-1">
                  Bạn chưa điền đặc điểm nổi bật
                </span>
              )}
            </div>
            <div className="mt-5">
              <span className="block mb-1">Mô tả dài</span>
              <textarea
                className="w-full h-[121px] p-2"
                {...register("long_description", { required: true })}
              ></textarea>
              {errors.long_description && (
                <span className="text-red-700 mt-1">
                  Bạn chưa viết mô tả dài
                </span>
              )}
            </div>
            <div className="flex items-center mt-5">
              <button className="bg-[#00B0D7] w-[94px] h-[34px] text-white rounded">
                Chỉnh sửa
              </button>
              <NavLink
                to={"/admin/phone"}
                className="bg-black inline-block py-[6px] px-4 ml-1 text-white rounded"
              >
                Quay lại
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPhone;
