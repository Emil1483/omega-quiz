"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    Paper,
    Stack,
    Button,
} from "@mui/material";
import { questions } from "@/questions";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function QuestionPage() {
    const params = useParams();
    const id = Number(params.id);
    const question = questions[id];

    if (!Number.isFinite(id) || !question) {
        return (
            <Container maxWidth="sm" sx={{ pt: 4 }}>
                <Typography variant="h6" color="error">
                    Question not found
                </Typography>
                <Button component={Link} href="/" sx={{ mt: 2 }} variant="outlined">
                    Back to quiz
                </Button>
            </Container>
        );
    }

    const hasPrev = id > 0;
    const hasNext = id < questions.length - 1;

    return (
        <Box
            sx={{
                minHeight: "100dvh",
                bgcolor: "background.default",
                color: "text.primary",
            }}
        >
            <AppBar position="sticky" elevation={0} color="primary">
                {/* Entire toolbar links back to root */}
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

            <Container maxWidth="sm" sx={{ py: 3 }}>
                <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 1 }}>
                    {/* Question text */}
                    <Typography variant="h6" gutterBottom>
                        {question.question}
                    </Typography>

                    {/* Answer text — same style as question */}
                    <Typography variant="h6">
                        {question.answer}
                    </Typography>
                </Paper>

                {/* Prev / Next navigation - mobile friendly */}
                <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
                    {hasPrev && (
                        <Button
                            component={Link}
                            href={`/${id - 1}`}
                            variant="outlined"
                            startIcon={<ChevronLeft />}
                            fullWidth
                        >
                            Previous
                        </Button>
                    )}
                    {hasNext && (
                        <Button
                            component={Link}
                            href={`/${id + 1}`}
                            variant="contained"
                            endIcon={<ChevronRight />}
                            fullWidth
                        >
                            Next
                        </Button>
                    )}
                </Stack>
            </Container>
        </Box>
    );
}
