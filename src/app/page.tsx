// app/page.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    List,
    ListItemText,
    Divider,
    Box,
    ListItemButton,
} from "@mui/material";
import { questions } from "@/questions";

export default function HomePage() {
    return (
        <Box
            sx={{
                minHeight: "100dvh",
                bgcolor: "background.default",
                color: "text.primary",
            }}
        >
            <AppBar position="sticky" elevation={0} color="primary">
                {/* Make the entire toolbar a link to "/" */}
                <Toolbar
                    component={Link}
                    href="/"
                    sx={{
                        minHeight: 56,
                        color: "inherit",
                        textDecoration: "none",
                        cursor: "pointer",
                    }}
                >
                    <Typography variant="h6" component="h1">
                        Quiz
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container
                maxWidth="sm"
                sx={{
                    px: 2,
                    pt: 2,
                    pb: "calc(env(safe-area-inset-bottom) + 16px)",
                }}
            >
                <Typography
                    variant="subtitle2"
                    sx={{ mb: 1, color: "text.secondary" }}
                    component="p"
                >
                    {questions.length} question{questions.length === 1 ? "" : "s"}
                </Typography>

                <List
                    disablePadding
                    sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        boxShadow: (theme) => theme.shadows[1],
                        bgcolor: "background.paper",
                    }}
                >
                    {questions.map((q, i) => (
                        <React.Fragment key={i}>
                            <ListItemButton
                                component={Link}
                                href={`/${i}`}
                                sx={{ px: 2, py: 1.25 }}
                            >
                                <ListItemText
                                    primary={`${i + 1}. ${q.question}`}
                                    primaryTypographyProps={{
                                        sx: {
                                            fontSize: "1rem",
                                            lineHeight: 1.4,
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            wordBreak: "break-word",
                                        },
                                    }}
                                />
                            </ListItemButton>
                            {i < questions.length - 1 && <Divider component="li" />}
                        </React.Fragment>
                    ))}
                </List>
            </Container>
        </Box>
    );
}
