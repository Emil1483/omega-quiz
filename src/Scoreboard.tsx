"use client";

import * as React from "react";
import { Box, Paper, Typography, Stack, Button, Divider } from "@mui/material";

type Scores = { a: number; b: number };
const STORAGE_KEY = "quiz-scores-v1";

function useScores() {
    const [scores, setScores] = React.useState<Scores>({ a: 0, b: 0 });

    React.useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) setScores(JSON.parse(raw));
        } catch { }
    }, []);

    const update = React.useCallback((next: Scores) => {
        setScores(next);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch { }
    }, []);

    const incA = () => update({ ...scores, a: scores.a + 1 });
    const decA = () => update({ ...scores, a: Math.max(0, scores.a - 1) });
    const incB = () => update({ ...scores, b: scores.b + 1 });
    const decB = () => update({ ...scores, b: Math.max(0, scores.b - 1) });
    const reset = () => update({ a: 0, b: 0 });

    return { scores, incA, decA, incB, decB, reset };
}

export function Scoreboard() {
    const { scores, incA, decA, incB, decB, reset } = useScores();

    return (
        <Box
            sx={{
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                px: 2,
                pb: "calc(env(safe-area-inset-bottom) + 8px)",
                zIndex: (t) => t.zIndex.appBar - 1,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    borderRadius: 3,
                    p: 1.5,
                    maxWidth: 600,
                    mx: "auto",
                }}
            >

                <Button onClick={reset} variant="contained" color="warning" fullWidth>
                    Reset
                </Button>

                <Box sx={{ height: "16px" }} />

                <Stack direction="row" spacing={2} alignItems="stretch">
                    {/* Team A */}
                    <Stack flex={1} spacing={1}>
                        <Typography variant="overline" sx={{ textAlign: "center" }}>
                            Team A
                        </Typography>
                        <Typography variant="h4" sx={{ textAlign: "center" }}>
                            {scores.a}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Button onClick={decA} variant="outlined" fullWidth aria-label="Decrement Team A">
                                –1
                            </Button>
                            <Button onClick={incA} variant="contained" fullWidth aria-label="Increment Team A">
                                +1
                            </Button>
                        </Stack>
                    </Stack>

                    <Divider orientation="vertical" flexItem />

                    {/* Team B */}
                    <Stack flex={1} spacing={1}>
                        <Typography variant="overline" sx={{ textAlign: "center" }}>
                            Team B
                        </Typography>
                        <Typography variant="h4" sx={{ textAlign: "center" }}>
                            {scores.b}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Button onClick={decB} variant="outlined" fullWidth aria-label="Decrement Team B">
                                –1
                            </Button>
                            <Button onClick={incB} variant="contained" fullWidth aria-label="Increment Team B">
                                +1
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>


            </Paper>
        </Box>
    );
}
