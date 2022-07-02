import React, { useCallback, useEffect, useState, useRef } from "react";
import {
    collection,
    addDoc,
    updateDoc,
    doc,
    serverTimestamp,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase.config";
import { useDropzone } from "react-dropzone";
import Select from "react-select";
import { RichTextEditor } from "@mantine/rte";
import { useUserAuth } from "../../context/userAuthContext";
import { toast } from "react-toastify";

const AddPost = () => {
    const { user } = useUserAuth();
    const titleRef = useRef(null);

    const options = [
        { value: "node", label: "Node" },
        { value: "life", label: "Life" },
        { value: "lighting", label: "Lighting" },
        { value: "jobs", label: "Jobs" },
        { value: "earth", label: "Earth" },
        { value: "eurrency", label: "Currency" },
        { value: "business", label: "Business" },
    ];

    const [tags, setTags] = useState([]);
    const [details, setDetails] = useState("");
    const [readTime, setReadTime] = useState(1);
    const [selectedImage, setSelectedImage] = useState([]);

    useEffect(() => {
        const wpm = 100;
        const words = details.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);

        setReadTime(time);
    }, [details]);

    const handlDescription = (e) => {
        setDetails(e);
    };

    const handleTagsChange = (newValue) => {
        let tagItem = [];
        newValue.map((item) => tagItem.push(item.value));
        setTags(tagItem);
    };

    const handleCatChange = (newValue) => {
        setFormData({ ...formData, category: newValue.value });
    };

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedImage(
            acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        );
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles: 1,
    });

    const selected_Image = selectedImage?.map((file) => (
        <div key={file.path}>
            <img
                src={file.preview}
                alt="image"
                className="h-[120px] w-[120px] object-cover border border-dashed border-[#dddddd] p-2 bg-white/50"
            />
        </div>
    ));

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        createdAt: serverTimestamp(),
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const countText = details.trim().split(/\s+/).length;

        if (
            !formData.category ||
            !formData.title ||
            countText < 5 ||
            !tags ||
            selectedImage === 0
        ) {
            toast.warning("Some field missing.! Please check all fields.");
            return;
        }

        e.target.reset();

        // await addDoc(collection(db, "posts"), {
        //     title: formData.title,
        //     description: details,
        //     category: formData.category,
        //     tags: tags,
        //     authorId: user.userId,
        //     likes: [],
        //     readingTime: readTime,
        //     createdAt: formData.createdAt,
        // }).then(async (result) => {
        //     await Promise.all(
        //         selectedImage.map((image) => {
        //             const imageRef = ref(
        //                 storage,
        //                 `posts/${result.id}/${image.path}`
        //             );
        //             uploadBytes(imageRef, image, "data_url").then(async () => {
        //                 const downloadUrl = await getDownloadURL(imageRef);
        //                 await updateDoc(doc(db, "posts", result.id), {
        //                     imageUrl: downloadUrl,
        //                 })
        //                     .then((res) => {
        //                         //console.log("successfull");
        //                     })
        //                     .catch((err) => console.log(err));
        //             });
        //         })
        //     );
        //     setFormData({ title: "", category: "" });
        //     setTags("");
        //     setDetails("");
        //     setSelectedImage([]);
        //     toast.success("Post added successfully...");
        // });
    };

    return (
        <>
            <div className="bg-white/50 p-6 rounded">
                <form onSubmit={handleSubmit} className="flex gap-6">
                    <div className="w-8/12">
                        <div className="mb-6">
                            <label className="font-medium" htmlFor="title">
                                <h3>Title</h3>
                            </label>
                            <input
                                ref={titleRef}
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Add title"
                                className="w-full mt-1 outline-none px-4 py-3 rounded border border-[#dddddd] bg-white/50 duration-200"
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="font-medium"
                                htmlFor="description"
                            >
                                <h3 className="pb-2">Description</h3>
                            </label>
                            <RichTextEditor
                                value={details}
                                onChange={handlDescription}
                                placeholder="Write description ( min 15 words)..."
                                controls={[
                                    ["bold", "italic", "underline", "link"],
                                    ["unorderedList", "h1", "h2", "h3"],
                                    ["sup", "sub", "blockquote"],
                                    ["alignLeft", "alignCenter", "alignRight"],
                                ]}
                            />
                        </div>
                        <div className="mb-6">{readTime} min read</div>
                        <div>
                            <button
                                type="submit"
                                className="px-8 py-3 uppercase bg-[#F09080] text-white duration-200 rounded hover:bg-black"
                            >
                                Publish Post
                            </button>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="mb-6">
                            <h3 className="font-medium text-[#152035] mb-2">
                                Categories
                            </h3>
                            <Select
                                options={options}
                                onChange={handleCatChange}
                                className="outline-none"
                            />
                        </div>
                        <div className="mb-6">
                            <h3 className="font-medium text-[#152035] mb-2">
                                Tags
                            </h3>
                            <Select
                                closeMenuOnSelect={false}
                                isMulti
                                options={options}
                                onChange={handleTagsChange}
                            />
                        </div>
                        <div>
                            <h3 className="font-medium text-[#152035] mb-2">
                                Featured Image
                            </h3>
                            <div
                                {...getRootProps()}
                                className="border border-dashed border-[#dddddd] bg-white/50 p-6 text-center cursor-pointer"
                            >
                                <input {...getInputProps()} />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 mb-4 text-[#F09180] mx-auto"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                </svg>
                                {isDragActive ? (
                                    <p>Drop the files here ...</p>
                                ) : (
                                    <p className="text-[14px] text-[#505050]">
                                        Drag 'n' drop some files here, or click
                                        to select files
                                    </p>
                                )}
                            </div>
                            <div className="flex mt-4">{selected_Image}</div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddPost;
