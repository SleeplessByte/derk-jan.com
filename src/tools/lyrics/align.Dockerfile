# Separates the vocals with Demucs and aligns the written lyrics to them with wav2vec2.
# torchaudio 2.5 has forced_align and the wav2vec2 pipelines; later versions deprecate or remove them.
FROM python:3.12-slim

RUN pip install --no-cache-dir torch==2.5.1 torchaudio==2.5.1 \
    --index-url https://download.pytorch.org/whl/cu124
RUN pip install --no-cache-dir demucs==4.0.1 soundfile==0.12.1
