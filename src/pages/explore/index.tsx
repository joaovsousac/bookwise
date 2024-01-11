import Sidebar from "@/components/Sidebar";
import { BookContainer, ExploreContainer, FlexContainer, InputContainer, NoBookFound, TagContainer, Title } from "./styles";
import { Binoculars, MagnifyingGlass } from "phosphor-react";
import PseudoSidebar from "@/components/Sidebar/PseudoSidebar";
import { Input } from "@/components/Input";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@prisma/client";
import { api } from "@/lib/axios";
import { Tag } from "@/components/Tag/input";
import { useEffect, useState } from "react";
import { BookCard, BookWithAvgRating } from "@/components/BookCard";

const Explore = () => {
    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const { data: categories } = useQuery<Category[]>({
        queryKey: ["categories"], // Envolver a string em um array
        queryFn: async () => {
            const { data } = await api.get("/books/categories");
            return data?.categories ?? [];
        },
    });

    const { data: books } = useQuery<BookWithAvgRating[], Error>({
        queryKey: ['books', selectedCategory],
        queryFn: async () => {
            const { data } = await api.get('/books', {
                params: {
                    category: selectedCategory,
                },
            });
            return data?.books ?? [];
        },
    });

    const filteredBooks = books?.filter((book) => {
        return book.name.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())
    })

    const [showNoBookFound, setShowNoBookFound] = useState(false);

    useEffect(() => {
        const handleNoBookFound = () => {
            setShowNoBookFound(true);
        };
        const timer: NodeJS.Timeout = setTimeout(handleNoBookFound, 1500);
        if (filteredBooks && filteredBooks.length === 0) {
        } else {
            setShowNoBookFound(false);
            clearTimeout(timer);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [filteredBooks]);
    return (
        <FlexContainer>
            <> <Sidebar /> <PseudoSidebar /> </>
            <ExploreContainer>
                <header>
                    <Title><Binoculars width={32} height={32} /> <h1>Explorar</h1></Title>
                    <InputContainer>
                        <Input
                            placeholder="Buscar livro ou autor"
                            width="27rem"
                            height="3rem"
                            icon={<MagnifyingGlass />}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </InputContainer>
                </header>
                <TagContainer>

                    <Tag active={selectedCategory === null} onClick={() => setSelectedCategory(null)}>
                        Tudo
                    </Tag>
                    {categories?.map((category, i) => (
                        <Tag key={category?.id} active={selectedCategory === category.id} onClick={() => setSelectedCategory(category.id)}>
                            {category?.name}
                        </Tag>
                    ))}
                </TagContainer>
                <BookContainer>
                    {filteredBooks && filteredBooks.length > 0 ? (
                        filteredBooks.map((book) => (
                            <BookCard key={book.id} size="lg" book={book} css={{ height: 184, width: 400 }} />
                        ))
                    ) : (
                        showNoBookFound && <NoBookFound>Nenhum livro encontrado :(</NoBookFound>
                    )}
                </BookContainer>
            </ExploreContainer>
        </FlexContainer>
    )
}

export default Explore